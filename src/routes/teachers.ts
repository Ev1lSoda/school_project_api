import express from "express";
import SqlQueries from "../sql/sql-queries";

export default class Teachers {
  public router = express.Router();
  private sqlQueries: SqlQueries = new SqlQueries();
  constructor() {
    this.initializeRoute();
  }

  public initializeRoute() {
    this.router.post("", (req: express.Request, res: express.Response) => {
      //   console.log("Teacher body: ", req.body);
      this.sqlQueries.addTeacher(req.body.teacher).then((rez) => res.status(200).json({ ok: true, results: rez }));
    });
    this.router.put("", (req: express.Request, res: express.Response) => {
      // console.log("Teacher body: ", req.body);
      this.sqlQueries.updTeacher(req.body.teacher).then((rez) => res.status(200).json({ ok: true, results: rez }));
    });
    this.router.delete("", (req: express.Request, res: express.Response) => {
      // console.log("Teacher body: ", req.body);
      this.sqlQueries.delTeacher(req.body.teacher).then((rez) => res.status(200).json({ ok: true, results: rez }));
    });
    this.router.post("/read", (req: express.Request, res: express.Response) => {
      this.sqlQueries.getTeacher(req.body.teacher).then((rez) => res.status(200).json({ ok: true, results: rez }));
    });
  }

  //   private addTeachers = (sq);
}
