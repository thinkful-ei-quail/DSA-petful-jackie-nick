const express = require('express')
const json = require('body-parser').json()
const store = require('../../store')
const People = require('./people.service')

const router = express.Router()

router.get('/', (req, res, next) => {
  // Return all the people currently in the queue.
  res.status(200).json(People.get());
})

router.post('/', json, (req, res, next) => {
  const person = req.body
  if(person.length === 0)
  return res.status(400).json({
    error: { message: `Missing name in request body` }
  })
  People.enqueue(person)
    return res.status(200).json(People.get())
  .catch(next)
})

module.exports = router
