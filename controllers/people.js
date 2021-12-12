const peopleRouter = require("express").Router();
const { response } = require("express");
const Person = require("../models/Person");

peopleRouter.get("/all", async (req, res) => {
  const persons = await Person.findAll();
  console.log(persons);
  res.json(persons);
});

peopleRouter.delete("/:id", async (req, res) => {
  await Person.destroy({
    where: { id: req.params.id },
  });
});

peopleRouter.post("/", async (req, res) => {
  const body = req.body;
  console.log(body);

  const newPerson = await Person.create({
    name: body.name,
    phoneNumber: body.phoneNumber,
  });

  res.json(newPerson);
});

peopleRouter.put("/:id", async (req, res) => {
  const body = req.body;

  // const person = {
  //   name: body.name,
  //   number: body.phoneNumber,
  // };

  const updatedPerson = await Person.update(
    { name: body.name, phoneNumber: body.phoneNumber },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  res.status(200).json(updatedPerson);
});

module.exports = peopleRouter;
