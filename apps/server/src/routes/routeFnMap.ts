import { Route } from "../sharedTypes";
import { Request, Response } from "express";

const routeFnMap: {
  [key in Route]: {
    fn: (req: Request, res: Response) => void;
    method: "get" | "post";
  };
} = {
  [Route.PLACEHOLDER]: {
    fn: (req, res) => {
      return res.send();
    },
    method: "get",
  },
};

export default routeFnMap;
