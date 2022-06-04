import app from "./app.js";
import mongoose from "mongoose";

const { MONGO_DB_URI_TEST, MONGODB_URI, NODE_ENV } = process.env;
const connectionString =
  NODE_ENV === "test"
    ? MONGO_DB_URI_TEST || "mongodb://localhost/apiJSTest"
    : MONGODB_URI || "mongodb://localhost/apiJS";

(async () => {
  try {
    await mongoose.connect(connectionString).then(() => {
      console.log("Connected with mongoDB");
      app.listen(4000, () => {
        console.log("Server listening on port: 4000");
      });
    });
  } catch (error) {
    console.error(error);
  }
})();
