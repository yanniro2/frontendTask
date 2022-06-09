import React from "react";
import htmlData from "../Datas/htmlData";
import Sub from "../Components/Sub";
function Section(props) {
  const sub = htmlData.map((data) => {
    return (
      <Sub
        key={data.id}
        id={data.id}
        name={data.name}
        category={data.category}
      />
    );
  });
  return (
    <div className="section">
      <h3 id="id">
        HTML <span>4/4</span>
      </h3>
      <div className="level">{sub}</div>
    </div>
  );
}

export default Section;
