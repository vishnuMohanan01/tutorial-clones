const functions = require('firebase-functions');
const admin = require("firebase-admin");
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
admin.initializeApp();


exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello World!");
});


exports.getScreams = functions.https.onRequest((request, response) => {

})
