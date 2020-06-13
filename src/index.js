const express = require("express");
const settings = require("./setting");
const morgan = require("morgan");
const app = express();
const cors = require("cors");

//middelwares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cors());

// routes
app.use(require("./routes"));


//starting the server
app.listen(settings.get("port"),
  () => { console.log(`server on port ${settings.get("port")}`); }
);
