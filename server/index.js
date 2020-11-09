const express = require("express");

const app = express();
const port = 4000;

app.get("/", (req, res) => { res.send("Hello world") });
app.get("/test", (req, res) => { res.send("Test Ready") });
app.listen(port, () => { console.log("http://localhost:4000 start") });