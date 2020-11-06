import * as winston from "winston";
import { Express, Request, Response } from "express";
import * as BlogRoutes from "./blogs";
import * as QuestionRoutes from "./questions";
import * as AnswerRoutes from "./answers";

export function initRoutes(app: Express) {
  winston.log("info", "--> Initialisations des routes");

  app.get("/v1", (req: Request, res: Response) =>
    res.status(200).send({
      message: "server is running!",
    })
  );

  BlogRoutes.routes(app);
  QuestionRoutes.routes(app);
  AnswerRoutes.routes(app);

  app.all("*", (req: Request, res: Response) => res.boom.notFound());
}
