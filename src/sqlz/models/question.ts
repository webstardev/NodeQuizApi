import { Model, STRING, INTEGER } from "sequelize";
import { Answer } from "./answer";
import sequelize from "./_index";

export class Question extends Model {}

export class QuestionModel {
  id: number;
  title: string;
  blog_id: number;
}

Question.init(
  {
    title: STRING,
    blog_id: INTEGER,
  },
  { sequelize, modelName: "Question" }
);

Question.hasMany(Answer, {
  as: "answer",
  foreignKey: "question_id",
});
