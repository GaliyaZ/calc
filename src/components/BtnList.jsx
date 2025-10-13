import React from "react";
import Button from "./Btn";
import { useState } from "react";

function BtnList() {
  //const [list, setList] = useState([]);

  const btns = ["=", "&times;", "-", "*", "%", 'C', '.', '', ...Array(10).keys()];
  console.log(Array.from({length: 10}));

  const list = btns.map((item) => (
    <Button val={item} key={item}>
      {item}
    </Button>
  ));

  return (
    <>
      {list}
    </>
  );
}

export default BtnList;
