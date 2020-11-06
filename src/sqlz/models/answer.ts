import { Model, STRING, INTEGER, BOOLEAN } from "sequelize";
import sequelize from "./_index";

export class Answer extends Model {}

export class AnswerModel {
  id: number;
  title: string;
  question_id: number;
  answer_order: number;
  correct_answer: boolean;
}

Answer.init(
  {
    title: STRING,
    question_id: INTEGER,
    answer_order: INTEGER,
    correct_answer: BOOLEAN,
  },
  { sequelize, modelName: "Answer" }
);
