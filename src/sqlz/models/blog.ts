import { Model, STRING, INTEGER } from "sequelize";
import { Question } from "./question";
import sequelize from "./_index";

export class Blog extends Model {}

export class BlogModel {
  id: number;
  title: string;
  blog_number: number;
  createdAt: Date;
  updatedAt: Date;
}

Blog.init(
  {
    title: STRING,
    blog_number: INTEGER,
  },
  { sequelize, modelName: "Blog" }
);

Blog.hasMany(Question, {
  as: "question",
  foreignKey: "blog_id",
});
