import express from 'express';
import path from 'node:path';
import usersRouter from './routes/userRouter.js'
import articleRouter from './routes/articleRouter.js'
import ejs from 'ejs'

const __dirname = import.meta.dirname;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views/pug'));

app.engine('ejs', ejs.renderFile);
app.set('views-ejs', path.join(__dirname, 'views/ejs'));


app.use('/users', usersRouter);
app.use('/articles', articleRouter);


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`The server working on port ${PORT}`) // replace on winston
})