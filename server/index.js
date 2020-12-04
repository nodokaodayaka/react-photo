const express = require("express");
const cors = require('cors')

const port = 4000;
const app = express();
app.use(cors())

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.json([
    {title:"title 1",
    description:'description 1',
    imageUrl:'http://localhost:4000/image/bob1.jpg'},
    {title:"title 2",
    description:'description 2',
    imageUrl:'http://localhost:4000/image/bob2.jpg'},
    {title:"title 3",
    description:'description 3',
    imageUrl:'http://localhost:4000/image/bob3.jpg'},
    {title:"title 4",
    description:'description 4',
    imageUrl:'http://localhost:4000/image/bob4.jpg'},
    {title:"title 5",
    description:'description 5',
    imageUrl:'http://localhost:4000/image/bob5.jpeg'},
  ]);
});

app.listen(port, () => {
  console.log("http://localhost:4000 start");
});
