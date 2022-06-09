import React from "react";
import htmlData from "../Datas/htmlData";
import Sub from "../Components/Sub";
function Html(props) {
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
    <div>
      <div className="section">
        <h3 id="id">
          {props.name} <span>4/4</span>
        </h3>
        <div className="level">{sub}</div>
      </div>
      ;
    </div>
  );
}

export default Html;
