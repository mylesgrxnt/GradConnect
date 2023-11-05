import express from "express";
import "dotenv/config";
import axios from "axios";
import cors from "cors";
import { auth } from "express-oauth2-jwt-bearer";
import connectDB from "./config/connectDB.js";
import StudentModel from "./models/Student.js";

const PORT = process.env.PORT || 3000;
const app = express();

const jwtCheck = auth({
  audience: "gradConnectAPI",
  issuerBaseURL: process.env.ISSUER_URL,
  tokenSigningAlg: "RS256",
});

await connectDB();
app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5174",
  })
);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("hi from api");
});

app.get("/api/user/get", jwtCheck, async (req, res) => {
  try {
    const accessToken = req.headers.authorization.split(" ")[1];
    const response = await axios.get(process.env.USER_INFO_URL, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log(response.data.email);
    const user = await StudentModel.findOneAndUpdate(
      { email: response.data.email },
      { authZeroId: response.data.sub },
      { new: true, upsert: true, lean: true }
    );
    res.json(user);
  } catch (error) {
    console.log(error);
  }
});

app.post("/api/student/update", jwtCheck, async (req, res) => {
  try {
    console.log("hi");
    const { name, major, region } = req.body;
    const authZeroId = req.auth.payload.sub;
    const updatedUser = await StudentModel.findOneAndUpdate(
      { authZeroId },
      { $set: { name, major, region, isProfileComplete: true } },
      { new: true }
    );
    console.log("user updated!!");

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(updatedUser);
  } catch (error) {
    console.log(error);
  }
});

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

// eslint-disable-next-line
app.use((error, req, res, next) => {
  const status = error.status || 500;
  const errorMsg = error.message || "Internal Server Error";
  res.status(status).send(errorMsg);
});
