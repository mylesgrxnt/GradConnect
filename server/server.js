import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/connectDB.js";
import StudentModel from "./models/Student.js";

const PORT = process.env.PORT || 3000;
const app = express();
await connectDB();
app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5174",
  })
);

app.post("/login", async (req, res, next) => {
  console.log("hi");
  try {
    let student = await StudentModel.findOne({
      studentName: "Test",
      email: "Test@bc.edu",
    });
    if (student === null) {
      student = new StudentModel({
        studentName: "Test",
        email: "Test@bc.edu",
      });
      await student.save();
    }
    console.log("posted to db");
    res.status(200).send("Login successful");
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred on the server");
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
