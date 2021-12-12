const admin = require("firebase-admin");
const credentials = require("../config");

const firebase = { auth: {} };

// credential: admin.credential.cert(credentials.get("firebase"))
const defaultApp = admin.initializeApp({
	credential: admin.credential.cert({
		project_id: credentials.get("firebase").project_id,
		private_key: credentials.get("firebase").private_key.replace(/\\n/g, "\n"),
		client_email: credentials.get("firebase").client_email,
	}),
});

const auth = defaultApp.auth();

firebase.auth = auth;
firebase.admin = admin;

module.exports = firebase;
