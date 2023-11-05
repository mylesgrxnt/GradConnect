import mongoose from "mongoose";
const { Schema } = mongoose;

const MentorSchema = new Schema(
  {
    studentName: { type: String, unique: true },
    email: { type: String, unique: true },
    gradYear: {
      type: Number,
      default: 2010,
    },
    authZeroId: { type: String, unique: true },
    college: [String],
    major: [String],
    openTo: [String],
    region: String,
    isProfileComplete: { type: Boolean, default: false },
    isMentor: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const MentorModel = mongoose.model("Mentor", MentorSchema);

export default MentorModel;
