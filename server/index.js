const express = require("express");
const cors = require("cors");

const port = 4000;
const app = express();
app.use(cors());

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.json([
    {
      id: "1",
      title: "title 1",
      description: "description 1",
      imageUrl: "http://localhost:4000/image/img1.jpg",
      counter: 0,
      my: {
        liked:false
      }
    },
    {
      id: "2",
      title: "title 2",
      description: "description 2",
      imageUrl: "http://localhost:4000/image/img2.jpg",
      counter: 1,
      my: {
        liked:false
      }
    },
    {
      id: "3",
      title: "title 3",
      description: "description 3",
      imageUrl: "http://localhost:4000/image/img3.jpg",
      counter: 2,
      my: {
        liked:false
      }
    },
    {
      id: "4",
      title: "title 4",
      description: "description 4",
      imageUrl: "http://localhost:4000/image/img4.jpg",
      counter: 3,
      my: {
        liked:false
      }
    },
    {
      id: "5",
      title: "title 5",
      description: "description 5",
      imageUrl: "http://localhost:4000/image/img5.jpg",
      counter: 4,
      my: {
        liked:false
      }
    },
  ]);
});

app.listen(port, () => {
  console.log("http://localhost:4000 start");
});
