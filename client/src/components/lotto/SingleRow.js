import React from "react";
import SingleBlock from "./SingleBlock";

const SingleRow = props => {
  const rowArray = props.lottonumber;

  return ( 
    rowArray.map((number, index) =>
      <SingleBlock oneblock={number} key={index} />
    )
  )
};

export default SingleRow;
