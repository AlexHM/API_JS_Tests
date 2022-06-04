import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  surname: {
    type: String,
  },
});

export default mongoose.model("users", userSchema);
