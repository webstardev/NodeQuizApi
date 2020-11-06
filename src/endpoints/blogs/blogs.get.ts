import { Request, Response } from "express";
import { BlogDao } from "../../dao/_index";

export function find(req: Request, res: Response) {
  if (!req.params.id || req.params.id === "all") {
    return BlogDao.findAll()
      .then((blogs) => res.status(200).send(blogs))
      .catch((error) => res.boom.badRequest(error));
  } else
    return BlogDao.find(req.params.id)
      .then((blogs) => res.status(200).send(blogs))
      .catch((error) => res.boom.badRequest(error));
}
