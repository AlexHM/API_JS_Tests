import deployRoutes from "./api/deploy/deploy.routes.js";
import userRoutes from "./api/users/user.routes.js";

const routes = (app) => {
  app.use("/deploy", deployRoutes);
  app.use("/users", userRoutes);
};

export default routes;
