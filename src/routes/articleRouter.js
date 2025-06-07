import { Router } from "express";
import { articles } from "../data/articles.js";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

router.get('/', (req, res) => {
  res.render(path.join(__dirname, '../views/ejs/articles.ejs'), { articles });
});

router.get('/:id', (req, res) => {
  const currentArticle = articles.find(article => article.id === Number(req.params.id));
  if (!currentArticle) return res.status(404).send('Article doesnt exist');
  res.render(path.join(__dirname, '../views/ejs/article.ejs'), { currentArticle });
})



export default router