import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [list, setList] = useState([]);

  const onclick = (id) => {
    const items = list.map((item) => {
      if (item.id == id && !item.my.liked) {
        item.counter += 1;
        item.my.liked = !item.my.liked;
        return item;
      }

      if (item.id == id && item.my.liked) {
        item.counter -= 1;
        item.my.liked = !item.my.liked;
        return item;
      }
      return item;
    });
    setList(items);
  };

  useEffect(() => {
    setTimeout(() => {
      axios.get("http://localhost:4000").then((result) => {
        setList(result.data);
      });
    }, 0);
  }, []);

  if (list.length < 1) {
    return <div>Loading...</div>;
  }

  return (
    <div className={"cards"}>
      {list.map((v, k) => (
        <div className={"card"} key={k}>
          <div>
            <img className={"photo"} src={v.imageUrl} alt="test" />
          </div>
          <div className={"content"}>
            <div className={"detail"}>
              <h2>{v.title}</h2>
              <p>{v.description}</p>
            </div>
            <div className={"like"}>
              <div className={"material-icons " + (v.my.liked ? "liked" : "")} onClick={() => onclick(v.id)}>tag_faces</div>
              <div>{v.counter}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;