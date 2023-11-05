import mongoose from "mongoose";
const { Schema } = mongoose;

const StudentSchema = new Schema(
  {
    studentName: String,
    email: { type: String, unique: true },
    gradYear: {
      type: Number,
      default: 2023,
    },
    authZeroId: { type: String, unique: true },
    major: [String],
    region: String,
    isProfileComplete: { type: Boolean, default: false },
    isMentor: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const StudentModel = mongoose.model("Student", StudentSchema);

export default StudentModel;
