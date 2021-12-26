const express = require("express");
const app = express();
require("dotenv").config();
const router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", router);

require("./database/connection.js");

require("./routes/index.js")(router);

app.listen(process.env.NODE_ENV !== "dev" ? process.env.PORT : 8000);
