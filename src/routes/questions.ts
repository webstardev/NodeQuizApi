import { Express } from "express";
import { QuestionController } from "../endpoints/_index";

export function routes(app: Express) {
  app.get("/v1/question/:id", QuestionController.QuestionGet.find);
}
