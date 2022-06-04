import app from "./app.js";
import mongoose from "mongoose";
import config from "./config/config.js";

(async () => {
  try {
    await mongoose
      .connect(config.MONGODB_URI || "mongodb://localhost/apiJS")
      .then(() => {
        console.log("Connected with mongoDB");
        app.listen(4000, () => {
          console.log("Server listening on port: 4000");
        });
      });
  } catch (error) {
    console.error(error);
  }
})();
