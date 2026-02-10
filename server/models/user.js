// User ka structure define karna
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // createdAt & updatedAt automatically add ho jayenge
  },
);

const User = mongoose.model("User", userSchema);
export default User;
