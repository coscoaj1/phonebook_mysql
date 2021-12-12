require("dotenv").config();
const express = require("express");
const app = express();
const peopleRouter = require("./controllers/People");
const sequelize = require("./utils/database");
const cors = require("cors");
const morgan = require("morgan");

app.use(cors());
app.use(express.json());

morgan.token("body", (req) => JSON.stringify(req.body));
app.use(morgan(":url :method :response-time ms :body"));

app.use("/api/people", peopleRouter);

const PORT = process.env.PORT || 3001;
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
