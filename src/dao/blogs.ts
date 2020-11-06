import { Blog } from "../sqlz/models/blog";
import { Question } from "../sqlz/models/question";
export function findAll(): Promise<any> {
  return new Promise((resolve: any, reject: any) => {
    Blog.findAll({ include: [{ all: true }] })
      .then(async (blogs) => {
        const blogList = [];
        for (let i = 0; i < blogs.length; i++) {
          const blogItem = blogs[i];
          const questionList = [];
          for (let j = 0; j < blogItem.question.length; j++) {
            try {
              const resQuestion = await Question.findOne({
                where: { id: blogItem.question[j].dataValues.id },
                include: [{ all: true }],
              });

              if (resQuestion)
                questionList.push(JSON.parse(JSON.stringify(resQuestion)));
            } catch (errQuestion) {
              console.log(errQuestion);
            }
          }
          blogList.push({
            ...JSON.parse(JSON.stringify(blogs[i])),
            question: [...questionList],
          });
          resolve(blogList);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function find(id: any): Promise<any> {
  return new Promise((resolve: any, reject: any) => {
    Blog.findOne({ where: { id: id }, include: [{ all: true }] })
      .then(async (blog) => {
        const questionList = [];
        for (let i = 0; i < blog.question.length; i++) {
          try {
            const resQuestion = await Question.findOne({
              where: { id: 1 },
              include: [{ all: true }],
            });
            if (resQuestion)
              questionList.push(JSON.parse(JSON.stringify(resQuestion)));
          } catch (errQuestion) {
            console.log("Error Find Question.");
          }
        }
        resolve({
          ...JSON.parse(JSON.stringify(blog)),
          question: [...questionList],
        });
      })
      .catch((error) => {
        reject(error);
      });
  });
}
