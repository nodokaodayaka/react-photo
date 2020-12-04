import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      axios.get("http://localhost:4000").then((result) => {
        setList(result.data);
      });
    }, 0);
  }, []);

  console.log(list.length);
  if (list.length < 1) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {list.map((v, k) => (
        <li key={k}>
          <h2>{v.title}</h2>
          <p>{v.description}</p>
          <img src={v.imageUrl} alt="image" />
        </li>
      ))}
    </ul>
  );
};

export default Home;
