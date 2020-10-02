const express = require("express");
const json = require("body-parser").json();

const Pets = require("./pets.service");
const People = require("../people/people.service");

const router = express.Router();

router.get("/", (req, res) => {
  // Return all pets currently up for adoption.
  res.status(200).json(Pets.get());
});

router.delete("/", json, (req, res) => {
  // Remove a pet from adoption.

  return res.status(204).end();
});

router.get("/cat", (req, res) => {
  res.status(200).json();
});

router.get("/dog", (req, res) => {
  res.status(200).json();
});

module.exports = router;
