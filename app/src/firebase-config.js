import * as firebase from 'firebase'
import { debounce } from 'lodash'

var FirebaseApp = {
  install (Vue, options) {
    let app = firebase.initializeApp({
      apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
      authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.VUE_APP_FIREBASE_DB_URL,
      projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
      storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.VUE_APP_FIREBASE_APP_ID
    })

    let login = () => {
      app
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then(function (result) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          // var token = result.credential.accessToken
          // The signed-in user info.
          // var user = result.user
        })
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code
          var errorMessage = error.message
          // The email of the user's account used.
          var email = error.email
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential
          // ...
          console.log('errorCode: ' + errorCode)
          console.log('errorMessage: ' + errorMessage)
          console.log('email: ' + email)
          console.log('credential: ' + credential)
        })
    }

    let logout = () => {
      app
        .auth()
        .signOut()
        .catch(function (error) {
          console.error(error)
        })
    }

    let modifyClaimsCloudFunction = firebase.functions().httpsCallable('modifyClaims')

    let modifyClaims = (targetUid, isAdmin, isModerator) => {
      modifyClaimsCloudFunction({
        targetUid: targetUid,
        claim: {
          admin: isAdmin,
          moderator: isModerator
        }
      })
        .then((result) => {
          console.log(result)
        })
    }

    let useVuex = options.store !== undefined

    if (useVuex) {
      options.store.registerModule('user', {
        namespaced: true,
        state: {
          user: null,
          token: null
        },
        mutations: {
          user (state, user) {
            state.user = user
          },
          token (state, token) {
            state.token = token
          }
        },
        actions: {
          login: login,
          logout: logout,
          modifyClaims: modifyClaims
        },
        getters: {
          isLoggedIn: state => {
            return state.user != null
          },
          userEmail: state => {
            return state.user ? state.user.email : null
          },
          userId: state => {
            return state.user ? state.user.uid : null
          },
          userImageURL: state => {
            return state.user ? state.user.photoURL : null
          },
          userName: state => {
            return state.user ? state.user.displayName : null
          },
          isAdmin: state => {
            return !!state.token.claims.admin
          },
          isModerator: state => {
            return !!state.token.claims.moderator
          }
        }
      })

      app
        .auth()
        .onAuthStateChanged(function (user) {
          if (user) {
            // Set user in store
            options.store.commit('user/user', user)
            // Get token to access custom claims
            user.getIdTokenResult()
              .then((idTokenResult) => {
                options.store.commit('user/token', idTokenResult)
              })
              .catch((error) => {
                console.log(error)
              })
            // Add listener to pickup claim changes on token refresh
            let metadataRef = firebase.database().ref('metadata/' + user.uid + '/refreshTime')
            metadataRef.on('value', (snapshot) => {
              user.getIdToken(true)
            })
          } else {
            options.store.commit('user/set', null)
          }
        })
    }

    Vue.prototype.$firebase = {
      app: app,
      firestore: app.firestore(),
      login: debounce(login, 1000, { leading: true }),
      logout: debounce(logout, 1000, { leading: true })
    }
  }
}

export default FirebaseApp
