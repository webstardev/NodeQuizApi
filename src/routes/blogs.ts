import { Express } from "express";
import { BlogController } from "../endpoints/_index";

export function routes(app: Express) {
  app.get("/v1/blog/:id", BlogController.BlogGet.find);
}
