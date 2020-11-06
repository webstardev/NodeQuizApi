import { Answer } from "../sqlz/models/answer";
export function findAll(): Promise<any> {
  return Answer.findAll();
}

export function find(id: any): Promise<any> {
  return Answer.findOne({
    where: {
      id: id,
    },
  });
}
