# Code & Brews Standup
Code & Brews Standup is an app that allows Code & Brews participants to share the project they are working on for the day.

# Features
* OAuth Login
* Post what you're working on for the day.
 * Use tags on your post to make them searchable.
* Specify what you can help with.
* Specify what you may want help with.
* Notify another participant you would like their help, or you could help them.

## Moderation Tools
* Flag a user for moderation.

# Technologies
* Vue
* Vuetify
* Firebase

# How to Run
```shell script
cd app
npm install
npm run serve
```

# Firebase
When developing locally against firebase APIs:
```shell script
# Ensure firebase tools are installed
npm install -g firebase-tools
cd app
firebase emulators:start
```

# Build & Deploy
```shell script
cd app
npm run build
# must be logged into firebase as the user who owns the firebase project.
npm run deploy
```
