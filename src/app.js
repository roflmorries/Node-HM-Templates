import express from 'express';
import path from 'node:path';
import { users } from './data/users.js';

const __dirname = import.meta.dirname;

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


app.get('/users', (req, res) => {
  res.render('users', { users });
})

app.get('/users/:id', (req, res) => {
  const currentUser = users.find(user => user.id === Number(req.params.id));
  if (!currentUser) return res.status(404).send('User doesnt exist');
  res.render('user', { currentUser })
})


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`The server working on port ${PORT}`) // replace on winston
})