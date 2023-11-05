import express from "express";
import pkg from "express-openid-connect";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/connectDB.js";
import StudentModel from "./models/Student.js";
const { auth, requiresAuth } = pkg;

const PORT = process.env.PORT || 3000;
const app = express();

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SESSION_SECRET,
  baseURL: "http://localhost:5174",
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
};

await connectDB();
app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5174",
  })
);

app.use(auth(config));

app.get("/", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});

// req.isAuthenticated is provided from the auth router
app.get("/profile", requiresAuth(), async (req, res) => {
  const user = req.oidc.user;
  const email = user.email;
  const userAuth = req.oidc.isAuthenticated();
  console.log(user);
  if (userAuth) {
    try {
      let student = await StudentModel.findOne({
        email: user.email,
      });
      if (student === null) {
        student = new StudentModel({
          email: user.email,
        });
        await student.save();
      }
      console.log("posted to db");
      res.status(200).send("Login successful");
    } catch (error) {
      console.error(error);
      res.status(500).send("An error occurred on the server");
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// eslint-disable-next-line
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
