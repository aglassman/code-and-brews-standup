const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp()

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!")
});

// On sign up.
exports.processSignUp = functions.auth.user().onCreate((user) => {
  // Set custom user claims on this newly created user.
  return admin.auth().setCustomUserClaims(user.uid, customClaims)
    .then(() => {
      // Update real-time database to notify client to force refresh.
      const userDetailRef = admin.database().ref("userDetails/" + user.uid);
      // Set the refresh time to the current UTC timestamp.
      // This will be captured on the client to force a token refresh.
      return userDetailRef.set({
        admin: false,
        moderator: false,
        signupTime: new Date().getTime(),
        refreshTime: new Date().getTime()
      })
    })
    .catch(error => {
      console.log(error);
    });
});

// Set Claims (admins only)
exports.addClaim = functions.https.onCall((data, context) => {
  if (context.auth.uid !== process.env.SUPER_ADMIN_UID
    || context.auth.token.admin === true) {

    const customClaims = {
      admin: data.claim.admin,
      moderator: data.claim.moderator
    }

    admin.auth().setCustomUserClaims(data.targetUid, customClaims)
      .then(() => {
        // Update real-time database to notify client to force refresh.
        return admin.database().ref("userDetails/" + data.targetUid)
          .set({
            admin: data.claim.admin,
            moderator: data.claim.moderator,
            refreshTime: new Date().getTime()
          })
      })
      .catch(error => {
        console.log(error);
      })
  } else {
    throw new functions.https.HttpsError('failed-precondition', 'The authorized user musth be the app super ' +
      'user, or have token.admin=true as a claim.')
  }
});
