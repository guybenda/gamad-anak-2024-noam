/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.helloWorld = onRequest((request, response) => {
	logger.info("Hello logs!", { structuredData: true });
	response.send("Hello from Firebase!");
});

exports.NoamDayOne = onRequest((request, response) => {
	response.send("48 61 61 63 68 69 6D 20 63 61 62 69 6E 65 74");
});

exports.NoamDayTwo = onRequest((request, response) => {
	response.send("Nice try :)");
});

exports.NoamDayThree = onRequest((request, response) => {
	response.send("You wish :)");
});
