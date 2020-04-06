# Code & Brews Standup
Code & Brews Standup is an app that allows Code & Brews participants to share the project they are working on for the day.

# Table of Contents
1. [Features](#features)
1. [Technologies](#technologies)
1. [How to Run](#how-to-run)
1. [Firebase Setup](#firebase)
1. [Build and Deploy](#build-and-deploy)
1. [Authentication](#authentication)
1. [Authorization](#authorization)
1. [Firestore Schema](#firestore-schema)
1. [Cloud Functions](#cloud-functions)

# Features
* OAuth Login
* Post what you're working on for the day.
  * Use tags on your post to make them searchable.
  * Search across all standups.
* User profile with links to public
* Specify what you can help with.
* Specify what you may want help with.
* Notify another participant you would like their help, or you could help them.
* Moderation Tools - Flag a user or post for moderation.

# Technologies
* Vue
* Vuetify
* Firebase
* Storybook

# How to Run
```shell script
cd app
npm install
npm run serve
```

# Firebase Setup
When developing locally against firebase APIs:
```shell script
# Ensure firebase tools are installed
npm install -g firebase-tools
cd app
firebase emulators:start
```

# Build and Deploy
```shell script
cd app
npm run build
# must be logged into firebase as the user who owns the firebase project.
npm run deploy
```

# Authentication

Authentication is provided as part of the Firebase application.  Currently the following
types are enabled

* Google Auth

To Implement

* Email Link
* GitHub
* Twitter

# Authorization

**Super Admin** can add or remove the admin or moderator token claim
from any user. Can also delete, or disable any user account. This is determined by a cloud function environment variable
which is set by the firebase project owner (Currently Andy Glassman).

**User** can modify any document  where their `auth.uid` is equal to the document.ownerId.

## Custom Token Claims
* admin
  * Can add modify any token claims on any user.
  * Can perform CRUD operations on any stored document.
* moderator
  * Can remove a post that does not follow community standards of Code + Brew Milwaukee.
  * Can disable a non-admin account.
  
Authorization is enforced via Cloud Functions, and Firestore rules.

`./app/functions/index.js`

`./app/firestore.rules`
  
# Firestore Schema
Firestore is a hierarchical document store.  You can get a good idea of which documents
exist, and how they can be modified, by looking at `./app/firestore.rules`

## User Details
User details provide a way for the application to query users based on their roles.
It also provides a document to store profile details like twitter handles, and github
username.

UID is the automatically assigned unique identifier assigned to the user when
they sign up. 

A default UserDetail document is created on user creation via a cloud function that
is triggered whenever a new user is created.

Path: `/userDetails/{uid}`

Schema (by example):
```json
{
  "claim": {
    "admin": false,
    "moderator": true
  },
  "profileInfo": {
    "username": "aglassman",
    "twitter": "@a_glassman",
    "github": "aglassman"
  }
}
```

## Event
Event is a document that represents a Code + Brew event.  It has all the info to display
the event, and it's details to to the user.  It also is responsible for
keeping track of RSVPs to that event.

Path: `/events/{eventId}`

Schema (by example):
```json
{
  "title": "Code + Brews",
  "description": "Join us virtually to code, and drink coffee.",
  "links": [
    {
      "title": "Discord",
      "type": "discord",
      "description": "Link to the discord server.",
      "href":  "https://..."
    }    
  ],
  "startTime": 
}
```

## Standup
Standup is the collection of all standup entries across all events.  This is the best
way to structure the collection in Firestore, and will allow better cross event queries
in the long run.  

Path: `/standupEntries/{entryId}`

Schema (by example)
```json
{
  "eventId": "123lkdf32",
  "ownerId": "ffjk32343",
  "ownerImageUrl": "https://...",
  "ownerUsername": "gnutrino",
  "text": "I plant to work on ..., I could use help on .., I can help with ...",
  "helpMe": ["css", "javascript"],
  "helpYou": ["java", "firebase", "vue"]
}
```

# Cloud Functions

# Mockups
Some crude mockups made using Google Draw:

[Google Draw Mockups](https://drive.google.com/drive/folders/1LPY4CWgju_3_f0LB6yayf3EvR20Xpzel?usp=sharing)