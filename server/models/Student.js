import mongoose from "mongoose";
const { Schema } = mongoose;

const StudentSchema = new Schema(
  {
    studentName: { type: String, unique: true },
    email: { type: String, unique: true },
    gradYear: {
      type: Number,
      default: 2023,
    },
    major: [String],
  },
  { timestamps: true }
);

const StudentModel = mongoose.model("Student", StudentSchema);

export default StudentModel;
