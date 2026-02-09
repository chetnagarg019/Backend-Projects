// User ka structure define karna 
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
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
    },
  },
  {
    timestamps: true,  // createdAt & updatedAt automatically add ho jayenge
  }
);

const User = mongoose.model("User", userSchema);
export default User;
