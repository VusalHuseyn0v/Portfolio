import React, { useState } from "react";
import { portfolio } from "../data/images/dummydata";
import { Visibility } from "@mui/icons-material";
import { Heading } from "../common/Heading";

const allCatogory = ["all", ...new Set(portfolio.map((item) => item.category))];
export const Portfolio = () => {
  const [list, setList] = useState(portfolio);
  const [category, setCategory] = useState(allCatogory);

  const filterItems = (category) => {
    const newItems = portfolio.filter((item) => item.category === category);
    setList(newItems);

    if (category === "all") {
      setList(portfolio);
    }
  };
  return (
    <article>
      <div className="container">
        <Heading title="Portfolio" />
        <div className="catButton">
          {category.map((category) => (
            <button
              className="primaryBtn"
              onClick={() => filterItems(category)} data-aos="zoom-out-down"
            >
              {category}
            </button>
          ))}
        </div>
        <div className="content grid3">
          {list.map((items) => (
            <div className="box" data-aos="fade-up">
              <div className="img">
                <img src={items.cover} alt="" />
              </div>
              <div className="overlay">
                <h3>{items.title}</h3>
                <span>{items.name}</span>
                <Visibility />
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};
