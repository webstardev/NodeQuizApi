import { Express } from "express";
import { AnswerController } from "../endpoints/_index";

export function routes(app: Express) {
  app.get("/v1/answer/:id", AnswerController.AnswerGet.find);
}
