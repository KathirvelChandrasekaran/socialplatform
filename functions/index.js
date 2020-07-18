const functions = require("firebase-functions");
const {
  getAllScreams,
  getScream,
  postOneScreams,
  commentOnScream,
  likeScream,
  unLikeScream,
  deleteScream,
} = require("./handlers/screams");
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
app.delete("/scream/:screamId", FBAuth, deleteScream);
app.get("/scream/:screamId", getScream);
app.post("/scream/:screamId/comment", FBAuth, commentOnScream);
app.get("/scream/:screamId/like", FBAuth, likeScream);
app.get("/scream/:screamId/unLike", FBAuth, unLikeScream);

app.post("/signup", signup);
app.post("/login", login);

app.post("/user/image", FBAuth, uploadImage);
app.post("/user", FBAuth, addUserDetails);
app.get("/user", FBAuth, getAuthenticatedUser);

exports.api = functions.https.onRequest(app);
