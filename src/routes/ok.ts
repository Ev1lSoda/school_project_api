import express from "express";
export default class Ok {
  public router = express.Router();
  constructor() {
    this.initializeRoute();
  }

  public initializeRoute() {
    this.router.get("", (req: express.Request, res: express.Response) => {
      res.status(200).json({ ok: true });
    });
  }
}
