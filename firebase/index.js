const admin = require("firebase-admin");
const config = require("../config");

const firebase = { auth: {} };

// credential: admin.credential.cert(credentials.get("firebase"))
const defaultApp =
  config.get("env") === "test_remote"
    ? {
        auth: () => {
          console.log("temp stub");
        },
      }
    : admin.initializeApp({
        credential: admin.credential.cert({
          project_id: config.get("firebase").project_id,
          private_key: config.get("firebase").private_key.replace(/\\n/g, "\n"),
          client_email: config.get("firebase").client_email,
        }),
      });

const auth = defaultApp.auth();

firebase.auth = auth;
firebase.admin = admin;

module.exports = firebase;
