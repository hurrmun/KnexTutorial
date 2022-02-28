//* dependencies
const express = require("express");
const router = require("./routes");

//* config
const app = express();

//* middleware
app.use(express.json());

//* middleware for routes
app.use(router);

app.listen(8080, () => console.log("serer listening on port 8080"));
