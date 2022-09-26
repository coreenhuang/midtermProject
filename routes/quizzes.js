const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.send('quizzes view goes here');
});

router.get('/new', (req, res) => {
  // res.send('new quizzes view goes here');
  res.render('quizzes/new');
});

router.get('/:id', (req, res) => {
  res.send('specific quizzes view goes here');
});

router.post('/', (req, res) => {
  console.log(req.body);
  res.send('Send OK');
});

module.exports = router;