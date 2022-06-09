import React from "react";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { AiOutlineStar } from "react-icons/ai";
import { BsBookmarkPlusFill } from "react-icons/bs";

function Sub(props) {
  return (
    <div>
      <div className="sub">
        <IoCheckmarkDoneCircleSharp className="icon-done" />
        <p>{props.name}</p>
        <div>
          <AiOutlineStar className="icon-star" />
          <BsBookmarkPlusFill className="icon-boockmark" />
        </div>
      </div>
    </div>
  );
}

export default Sub;
