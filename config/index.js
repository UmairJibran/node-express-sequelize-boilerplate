const convict = require("convict");
const convict_format_with_validator = require("convict-format-with-validator");

// Add all formats
convict.addFormats(convict_format_with_validator);

// Define a schema
var config = convict({
  env: {
    doc: "The application environment.",
    format: ["production", "development", "test", "test_remote"],
    default: "development",
    env: "NODE_ENV",
    arg: "env",
  },
  ip: {
    doc: "The IP address to bind.",
    format: "ipaddress",
    default: "127.0.0.1",
    env: "IP_ADDRESS",
  },
  port: {
    doc: "The port to bind.",
    format: "port",
    default: 3000,
    env: "PORT",
    arg: "port",
  },
  db: {
    type: {
      doc: "Database Type",
      format: String,
      default: "mysql",
      env: "DB_TYPE",
    },
    host: {
      doc: "Database host name/IP",
      format: String,
      default: "127.0.0.1",
      env: "DB_HOST",
    },
    name: {
      doc: "Database name",
      format: String,
      default: "database_development",
      env: "DB_NAME",
    },
    username: {
      doc: "db user",
      format: String,
      default: "root",
      env: "DB_USERNAME",
    },
    password: {
      doc: "db password",
      format: "*",
      default: null,
      env: "DB_PASSWORD",
    },
  },
  firebase: {
    api_key: {
      doc: "API Key for Authentication",
      format: String,
      default: "",
      env: "FIREBASE_API_KEY",
    },
    type: {
      doc: "Type of Firebase",
      format: String,
      default: "",
      env: "FIREBASE_TYPE",
    },
    project_id: {
      doc: "Project Id of Firebase",
      format: String,
      default: "",
      env: "FIREBASE_PROJECT_ID",
    },
    private_key_id: {
      doc: "Private Key Id for Firebase",
      format: String,
      default: "",
      env: "FIREBASE_PRIVATE_KEY_ID",
    },
    private_key: {
      doc: "Private Key for Firebase",
      format: String,
      default: "",
      env: "FIREBASE_PRIVATE_KEY",
    },
    client_email: {
      doc: "Client Email for Firebase",
      format: String,
      default: "",
      env: "FIREBASE_CLIENT_EMAIL",
    },
    client_id: {
      doc: "Client ID for Firebase",
      format: String,
      default: "",
      env: "FIREBASE_CLIENT_ID",
    },
    auth_uri: {
      doc: "auth uri for Firebase",
      format: String,
      default: "",
      env: "FIREBASE_AUTH_URI",
    },
    token_uri: {
      doc: "token uri for Firebase",
      format: String,
      default: "",
      env: "FIREBASE_TOKEN_URI",
    },
    auth_provider_x509_cert_url: {
      doc: "Auth Provide for Firebase",
      format: String,
      default: "",
      env: "FIREBASE_AUTH_PROVIDER_CERT_URL",
    },
    client_x509_cert_url: {
      doc: "Client Cert URL for Firebase",
      format: String,
      default: "",
      env: "FIREBASE_CLIENT_CERT_URL",
    },
  },
});

// Load environment dependent configuration
let env = config.get("env");
console.log("environment is", env);
if (env === "development" || env === "test") {
  config.loadFile(__dirname + "/environments/" + env + ".json");
}

// Perform validation
config.validate({ allowed: "strict" });

module.exports = config;
