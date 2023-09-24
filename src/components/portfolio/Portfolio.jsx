/* eslint-disable no-unused-vars */
import Items from "./Items";
import List from "./List";
import "./portfolio.css";
import { projects } from "../../Data";
import { useState } from "react";

const allNavList = [
  "all",
  ...new Set(projects.map((project) => project.category)),
];

function Portfolio() {
  const [projectItems, setMenuItems] = useState(projects);
  const [navList, setCategories] = useState(allNavList);

  const filterItems = function (category) {
    if (category === "all") {
      setMenuItems(projects);
      return;
    }

    const newProjectItem = projects.filter(
      (item) => item.category === category
    );

    setMenuItems(newProjectItem);
  };

  return (
    <div>
      <section className="portfolio section" id="work">
        <h2 className="section__title text-cs">Portfolio</h2>
        <p className="section__subtitle">
          My <span>Cases</span>
        </p>

        <List list={navList} filterItems={filterItems} />

        <div className="portfolio__container container grid">
          <Items projectItems={projectItems} />
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
