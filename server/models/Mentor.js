import mongoose from "mongoose";
const { Schema } = mongoose;

const MentorSchema = new Schema(
  {
    email: { type: String, unique: true },
    gradYear: {
      type: Number,
      default: 2010,
    },
    major: [String],
  },
  { timestamps: true }
);

const MentorModel = mongoose.model("Mentor", MentorSchema);

export default MentorModel;
