import React from "react";
import SingleBlock from "./SingleBlock";

const LottoBlock = props => {
  const lottoBlock = props.lottonumber;

  return ( 
    lottoBlock.map((number, index) =>
      <SingleBlock oneblock={number} key={index} />
    )
  )
};

export default LottoBlock;
