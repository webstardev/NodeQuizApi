import { Request, Response } from "express";
import { AnswerDao } from "../../dao/_index";

export function find(req: Request, res: Response) {
  if (!req.params.id || req.params.id === "all") {
    return AnswerDao.findAll()
      .then((questions) => res.status(200).send(questions))
      .catch((error) => res.boom.badRequest(error));
  } else
    return AnswerDao.find(req.params.id)
      .then((questions) => res.status(200).send(questions))
      .catch((error) => res.boom.badRequest(error));
}
