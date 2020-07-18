const functions = require("firebase-functions");
const { getAllScreams, postOneScreams } = require("./handlers/screams");
const {
  signup,
  login,
  getAuthenticatedUser,
  addUserDetails,
  uploadImage,
} = require("./handlers/users");

const express = require("express");
const app = express();

const FBAuth = require("./utils/fbauth");

app.get("/screams", getAllScreams);
app.post("/scream", FBAuth, postOneScreams);

app.post("/signup", signup);
app.post("/login", login);

app.post("/user/image", FBAuth, uploadImage);
app.post("/user", FBAuth, addUserDetails);
app.get("/user", FBAuth, getAuthenticatedUser);
exports.api = functions.https.onRequest(app);
