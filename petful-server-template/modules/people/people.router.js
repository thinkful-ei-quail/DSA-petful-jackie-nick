const express = require('express')
const json = require('body-parser').json()
const store = require('../../store')
const People = require('./people.service')

const router = express.Router()

router.get('/', (req, res, next) => {
  // Return all the people currently in the queue.
  res.status(200).json(People.get());
});
router.post("/", json, (req, res) => {
  // Add a new person to the queue.
  const { name } = req.body;
  if (!name)
    return res.status(400).json({
      error: `Missing name in request body`,
    });
  People.enqueue(name);
  res.sendStatus(201);
});
router.delete("/", json, (req, res) => {
  const { name } = req.body;
  res.send(People.dequeue(name));
});

module.exports = router
