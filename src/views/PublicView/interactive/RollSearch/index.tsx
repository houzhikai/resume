import React, { useEffect, useState } from "react";
import { Input } from "antd";
import { Title } from "../../../../components/Div";

const { Search } = Input;

const RollSearch = () => {
  const [defaultValue, setDedefaultValue] = useState("王宝强");

  const list = ["111", "222", "333", "444"];

  const loop = (arr: string[]) => {
    for (let i = 0; i < arr.length; i++) {
      setTimeout(() => {
        return arr[i];
      }, 5000 * i);
    }
  };
  loop(list);

  console.log(11, loop(list));
  const handleChange = (e: any) => {
    console.log(e.target.value);
    setDedefaultValue(e.target.value);
  };
  return (
    <div>
      <Title>模拟实时弹幕聊天室</Title>
      <Search
        placeholder="111"
        defaultValue={defaultValue}
        value={defaultValue}
        onChange={handleChange}
        enterButton="搜索"
      />
    </div>
  );
};

export default RollSearch;
