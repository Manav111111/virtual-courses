import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6
  },
  role: {
    type: String,
    enum: ["student", "Educator"],
    required: true,
  },
photoUrl:{
    type: String,
    default: "",
  },
  enrolledCourses: [{
    type: mongoose.Schema.Types.ObjectId,
  }]
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;