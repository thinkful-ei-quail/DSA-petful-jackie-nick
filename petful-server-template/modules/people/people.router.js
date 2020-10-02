const express = require('express')
const json = require('body-parser').json()
const store = require('../../store')
const People = require('./people.service')

const router = express.Router()

router.get('/', (req, res) => {
  // Return all the people currently in the queue.
  res.status(200).json(People.get());
})

router.post('/', json, (req, res) => {
  // Add a new person to the queue.
  People.enqueue(People.dequeue());
  res.status(200).json(People.get(person))
})

module.exports = router
