import dotenv from "dotenv";
import path from "path";
import express from "express";
import cors from "cors";
import helmet from "helmet";

export default class Server {
  public app: express.Application;
  public port: number;

  constructor(controllers: any) {
    dotenv.config();
    this.app = express();
    this.port = parseInt(process.env.PORT as string, 10);
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(express.json());
    this.initializeControllers(controllers);
  }

  private initializeControllers(controllers: any) {
    controllers.forEach((controller: any) => this.app.use(controller.path, controller.cntr.router));
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App is listening on port ${this.port}`);
    });
  }
}
