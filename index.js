const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");
const UserRoutes = require("./routes");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/user", UserRoutes);

require("./database/connection.js")(mongoose);

const port = process.env.NODE_ENV !== "dev" ? process.env.PORT : 8000;

app.listen(port, () => console.log("connection running at :" + port));
