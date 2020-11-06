import { Question } from "../sqlz/models/question";
export function findAll(): Promise<any> {
  return Question.findAll({ include: [{ all: true }] });
}

export function find(id: any): Promise<any> {
  return Question.findOne({
    where: {
      id: id,
    },
    include: [{ all: true }],
  });
}
