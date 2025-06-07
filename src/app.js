import express from 'express';
import path from 'node:path';
import usersRouter from './routes/userRouter.js'

const __dirname = import.meta.dirname;

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


app.use('/users', usersRouter);


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`The server working on port ${PORT}`) // replace on winston
})