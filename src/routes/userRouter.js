import { Router } from "express";
import { users } from "../data/users.js";

const router = Router()

router.get('/', (req, res) => {
  res.render('users', { users });
})

router.get('/:id', (req, res) => {
  const currentUser = users.find(user => user.id === Number(req.params.id));
  if (!currentUser) return res.status(404).send('User doesnt exist');
  res.render('user', { currentUser })
})

export default router