import { Request, Response } from "express";
import { QuestionDao } from "../../dao/_index";

export function find(req: Request, res: Response) {
  if (!req.params.id || req.params.id === "all") {
    return QuestionDao.findAll()
      .then((questions) => res.status(200).send(questions))
      .catch((error) => res.boom.badRequest(error));
  } else
    return QuestionDao.find(req.params.id)
      .then((questions) => res.status(200).send(questions))
      .catch((error) => res.boom.badRequest(error));
}
