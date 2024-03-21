/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onRequest } = require("firebase-functions/v2/https");

exports.noam_day_one = onRequest((request, response) => {
	// const now = new Date().valueOf();

	// if (now > dayThreeUnlockDate.valueOf()) {
	// 	response.setHeader("G", "G");
	// 	response.setHeader("B", "B");
	// 	response.setHeader("D", "D");
	// }

	response.send(
		"Ofir ruined the fun... but if you manage to solve the riddle, he'll reveal the secret to you!"
	);
});

const dayTwoPasswordParam = "password";
const dayTwoPassword = "kj4A342df7tF5fg";
const dayTwoImageData =
	"data:image/jpeg;base64,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";

const dayTwoFirstUnlockDate = new Date("2024-03-20T05:00:00Z");
const dayTwoUnlockDate = new Date("2024-03-20T09:00:00Z");

exports.noam_day_two = onRequest((request, response) => {
	const now = new Date().valueOf();

	if (now < dayTwoFirstUnlockDate.valueOf()) {
		return response.send("Not yet :) ");
	}

	if (now < dayTwoUnlockDate.valueOf()) {
		return response.send(
			`Come back in ${Math.ceil(
				(dayTwoUnlockDate.valueOf() - now) / 60000
			)} minutes!`
		);
	}

	response.send("osharon might have something for you");
});

exports.super_secret = onRequest((request, response) => {
	const pwd = request.query[dayTwoPasswordParam];

	if (!pwd) {
		return response.send(
			`Missing query param: "password", maybe you can find it in "services/dashboard/internal/handlers/authentication/login.go"`
		);
	}

	if (pwd !== dayTwoPassword) {
		return response.send("Wrong password! Try again");
	}

	response.setHeader("Gamad-gender", "male");

	response.send(dayTwoImageData);
});

const dayThreeUnlockDate = new Date("2024-03-21T10:00:00Z");

exports.noam_day_three = onRequest((request, response) => {
	const now = new Date().valueOf();

	if (now < dayThreeUnlockDate.valueOf()) {
		return response.send(
			`Come back in ${Math.ceil(
				(dayThreeUnlockDate.valueOf() - now) / 60000
			)} minutes!`
		);
	}

	response.send(html);
});

exports.temp_test = onRequest((request, response) => {
	response.setHeader("G", "G");
	response.setHeader("B", "B");
	response.setHeader("D", "D");

	response.send(html);
});

const html = `<!DOCTYPE html><head> <style>  .t2 {   background-color: white;   display: inline-block;   width: 1rem;   height: 1.5rem;  }  .t1 {   background-color: white;   display: inline-block;   width: 1rem;   height: 1.5rem;  } </style></head><html lang="en"> <body> Your first clue is hidden here ↓ <br><span class="t1"></span><span class="t1"></span><span class="t2"></span  ><span class="t2"></span><span class="t2"></span><span class="t2"></span  ><span class="t2"></span><span class="t2"></span><span class="t2"></span  ><span class="t2"></span><span class="t2"></span><span class="t1"></span  ><span class="t1"></span><span class="t2"></span><span class="t2"></span  ><span class="t2"></span><span class="t2"></span><span class="t2"></span  ><span class="t1"></span><span class="t1"></span><span class="t1"></span  ><span class="t2"></span><span class="t2"></span><span class="t2"></span  ><span class="t2"></span><span class="t2"></span><span class="t1"></span  ><span class="t2"></span><span class="t2"></span><span class="t2"></span  ><span class="t2"></span><span class="t2"></span><span class="t1"></span  ><span class="t2"></span><span class="t2"></span><span class="t2"></span  ><span class="t2"></span><span class="t2"></span><span class="t1"></span  ><span class="t1"></span><span class="t1"></span><span class="t1"></span  ><span class="t1"></span><span class="t1"></span><span class="t1"></span  ><span class="t1"></span><span class="t1"></span><span class="t2"></span  ><span class="t2"></span><span class="t2"></span><span class="t2"></span  ><span class="t2"></span><span class="t2"></span><span class="t2"></span  ><span class="t2"></span><span class="t2"></span><span class="t1"></span  ><span class="t1"></span><br /><span class="t1"></span  ><span class="t2"></span><span class="t2"></span><span class="t2"></span  ><span class="t1"></span><span class="t1"></span><span class="t1"></span  ><span class="t1"></span><span class="t1"></span><span class="t2"></span  ><span class="t2"></span><span class="t2"></span><span class="t1"></span  ><span class="t1"></span><span class="t2"></span><span class="t2"></span  ><span class="t2"></span><span class="t1"></span><span class="t1"></span  ><span class="t1"></span><span class="t1"></span><span class="t1"></span  ><span class="t2"></span><span class="t2"></span><span class="t2"></span  ><span class="t1"></span><span class="t1"></span><span class="t1"></span  ><span class="t2"></span><span class="t2"></span><span class="t2"></span  ><span class="t1"></span><span class="t1"></span><span class="t1"></span  ><span class="t2"></span><span class="t2"></span><span class="t2"></span  ><span class="t1"></span><span class="t1"></span><span class="t1"></span  ><span class="t1"></span><span class="t1"></span><span class="t1"></span  ><span class="t1"></span><span class="t1"></span><span class="t1"></span  ><span class="t2"></span><span class="t2"></span><span class="t2"></span  ><span class="t1"></span><span class="t1"></span><span class="t1"></span  ><span class="t1"></span><span class="t1"></span><span class="t2"></span  ><span class="t2"></span><span class="t2"></span><span class="t1"></span  ><br /><span class="t1"></span><span class="t2"></span  ><span class="t2"></span><span class="t2"></span><span class="t1"></span  ><span class="t1"></span><span class="t1"></span><span class="t1"></span  ><span class="t1"></span><span class="t1"></span><span class="t1"></span  ><span class="t1"></span><span class="t1"></span><span class="t1"></span  ><span class="t2"></span><span class="t2"></span><span class="t2"></span  ><span class="t1"></span><span class="t1"></span><span class="t1"></span  ><span class="t1"></span><span class="t1"></span><span class="t2"></span  ><span class="t2"></span><span class="t2"></span><span class="t1"></span  ><span class="t1"></span><span class="t1"></span><span class="t2"></span  ><span class="t2"></span><span class="t2"></span><span class="t1"></span  ><span class="t1"></span><span class="t1"></span><span class="t2"></span  ><span class="t2"></span><span class="t2"></span><span class="t1"></span  ><span class="t1"></span><span class="t1"></span><span class="t1"></span  ><span class="t1"></span><span class="t1"></span><span class="t1"></span  ><span class="t1"></span><span class="t1"></span><span class="t2"></span  ><span class="t2"></span><span class="t2"></span><span class="t1"></span  ><span class="t1"></span><span class="t1"></span><span class="t1"></span  ><span class="t1"></span><span class="t2"></span><span class="t2"></span  ><span class="t2"></span><span class="t1"></span><br /><span   class="t1"  ></span  ><span class="t1"></span><span class="t2"></span><span class="t2"></span  ><span class="t2"></span><span class="t2"></span><span class="t2"></span  ><span class="t2"></span><span class="t2"></span><span class="t2"></span  ><span class="t2"></span><span class="t1"></span><span class="t1"></span  ><span class="t1"></span><span class="t2"></span><span class="t2"></span  ><span class="t2"></span><span class="t2"></span><span class="t2"></span  ><span class="t2"></span><span class="t2"></span><span class="t2"></span  ><span class="t2"></span><span class="t2"></span><span class="t2"></span  ><span class="t1"></span><span class="t1"></span><span class="t1"></span  ><span class="t2"></span><span class="t2"></span><span class="t2"></span  ><span class="t1"></span><span class="t1"></span><span class="t1"></span  ><span class="t2"></span><span class="t2"></span><span class="t2"></span  ><span class="t1"></span><span class="t1"></span><span class="t1"></span  ><span class="t1"></span><span class="t1"></span><span class="t1"></span  ><span class="t1"></span><span class="t1"></span><span class="t1"></span  ><span class="t2"></span><span class="t2"></span><span class="t2"></span  ><span class="t2"></span><span class="t2"></span><span class="t2"></span  ><span class="t2"></span><span class="t2"></span><span class="t2"></span  ><span class="t2"></span><span class="t2"></span><span class="t1"></span  ><br /><span class="t1"></span><span class="t1"></span  ><span class="t1"></span><span class="t1"></span><span class="t1"></span  ><span class="t1"></span><span class="t1"></span><span class="t1"></span  ><span class="t1"></span><span class="t2"></span><span class="t2"></span  ><span class="t2"></span><span class="t1"></span><span class="t1"></span  ><span class="t2"></span><span class="t2"></span><span class="t2"></span  ><span class="t1"></span><span class="t1"></span><span class="t1"></span  ><span class="t1"></span><span class="t1"></span><span class="t2"></span  ><span class="t2"></span><span class="t2"></span><span class="t1"></span  ><span class="t1"></span><span class="t1"></span><span class="t2"></span  ><span class="t2"></span><span class="t2"></span><span class="t1"></span  ><span class="t1"></span><span class="t1"></span><span class="t2"></span  ><span class="t2"></span><span class="t2"></span><span class="t1"></span  ><span class="t1"></span><span class="t1"></span><span class="t1"></span  ><span class="t1"></span><span class="t1"></span><span class="t1"></span  ><span class="t1"></span><span class="t1"></span><span class="t2"></span  ><span class="t2"></span><span class="t2"></span><span class="t1"></span  ><span class="t1"></span><span class="t1"></span><span class="t1"></span  ><span class="t1"></span><span class="t2"></span><span class="t2"></span  ><span class="t2"></span><span class="t1"></span><br /><span   class="t1"  ></span  ><span class="t2"></span><span class="t2"></span><span class="t2"></span  ><span class="t1"></span><span class="t1"></span><span class="t1"></span  ><span class="t1"></span><span class="t1"></span><span class="t2"></span  ><span class="t2"></span><span class="t2"></span><span class="t1"></span  ><span class="t1"></span><span class="t2"></span><span class="t2"></span  ><span class="t2"></span><span class="t1"></span><span class="t1"></span  ><span class="t1"></span><span class="t1"></span><span class="t1"></span  ><span class="t2"></span><span class="t2"></span><span class="t2"></span  ><span class="t1"></span><span class="t1"></span><span class="t1"></span  ><span class="t2"></span><span class="t2"></span><span class="t2"></span  ><span class="t1"></span><span class="t1"></span><span class="t1"></span  ><span class="t2"></span><span class="t2"></span><span class="t2"></span  ><span class="t1"></span><span class="t1"></span><span class="t1"></span  ><span class="t1"></span><span class="t1"></span><span class="t1"></span  ><span class="t2"></span><span class="t1"></span><span class="t1"></span  ><span class="t2"></span><span class="t2"></span><span class="t2"></span  ><span class="t1"></span><span class="t1"></span><span class="t1"></span  ><span class="t1"></span><span class="t1"></span><span class="t2"></span  ><span class="t2"></span><span class="t2"></span><span class="t1"></span  ><br /><span class="t1"></span><span class="t1"></span  ><span class="t2"></span><span class="t2"></span><span class="t2"></span  ><span class="t2"></span><span class="t2"></span><span class="t2"></span  ><span class="t2"></span><span class="t2"></span><span class="t2"></span  ><span class="t1"></span><span class="t1"></span><span class="t2"></span  ><span class="t2"></span><span class="t2"></span><span class="t2"></span  ><span class="t2"></span><span class="t1"></span><span class="t1"></span  ><span class="t1"></span><span class="t2"></span><span class="t2"></span  ><span class="t2"></span><span class="t2"></span><span class="t2"></span  ><span class="t1"></span><span class="t2"></span><span class="t2"></span  ><span class="t2"></span><span class="t2"></span><span class="t2"></span  ><span class="t1"></span><span class="t2"></span><span class="t2"></span  ><span class="t2"></span><span class="t2"></span><span class="t2"></span  ><span class="t2"></span><span class="t2"></span><span class="t2"></span  ><span class="t2"></span><span class="t2"></span><span class="t2"></span  ><span class="t1"></span><span class="t2"></span><span class="t2"></span  ><span class="t2"></span><span class="t2"></span><span class="t2"></span  ><span class="t1"></span><span class="t1"></span><span class="t1"></span  ><span class="t2"></span><span class="t2"></span><span class="t2"></span  ><span class="t2"></span><span class="t2"></span><br /><span   class="t1"  ></span  ><span class="t1"></span><span class="t1"></span><span class="t1"></span  ><span class="t1"></span><span class="t1"></span><span class="t1"></span  ><span class="t1"></span><span class="t1"></span><span class="t1"></span  ><span class="t1"></span><span class="t1"></span><span class="t1"></span  ><span class="t1"></span><span class="t1"></span><span class="t1"></span  ><span class="t1"></span><span class="t1"></span><span class="t1"></span  ><span class="t1"></span><span class="t1"></span><span class="t1"></span  ><span class="t1"></span><span class="t1"></span><span class="t1"></span  ><span class="t1"></span><span class="t1"></span><span class="t1"></span  ><span class="t1"></span><span class="t1"></span><span class="t1"></span  ><span class="t1"></span><span class="t1"></span><span class="t1"></span  ><span class="t1"></span><span class="t1"></span><span class="t1"></span  ><span class="t1"></span><span class="t1"></span><span class="t1"></span  ><span class="t1"></span><span class="t1"></span><span class="t1"></span  ><span class="t1"></span><span class="t1"></span><span class="t1"></span  ><span class="t1"></span><span class="t1"></span><span class="t1"></span  ><span class="t1"></span><span class="t1"></span><span class="t1"></span  ><span class="t1"></span><span class="t1"></span><span class="t1"></span  ><span class="t1"></span><span class="t1"></span><span class="t1"></span> </body></html>`;
