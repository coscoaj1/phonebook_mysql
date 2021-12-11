const peopleRouter = require("express").Router();
const { response } = require("express");
const Person = require("../models/Person");

peopleRouter.get("/all", async (req, res) => {
  const persons = await Person.findAll();
  console.log(persons);
  res.json(persons);
});

peopleRouter.post("/", async (req, res) => {
  const john = await Person.create({
    name: "john",
    phoneNumber: "828-555-1212",
  });
  console.log("johns auto generated ID:", john.id);
});

module.exports = peopleRouter;

peopleRouter.delete("/:id", async (req, res) => {
  await Person.destroy({
    where: { id: req.params.id },
  });
});
