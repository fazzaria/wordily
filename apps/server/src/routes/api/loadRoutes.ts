import { Express } from "express";
import { Route } from "../../sharedTypes";
import DEV_URL from "../../const/devUrl";
import isProd from "../../utils/isProd";
import routeFnMap from "../routeFnMap";

const loadRoutes = (app: Express) => {
  if (!isProd()) {
    app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", DEV_URL);
      next();
    });
  }
  Object.values(Route).forEach((val) => {
    const { fn, method } = routeFnMap[val];
    app[method](val, fn);
  });
};

export default loadRoutes;
