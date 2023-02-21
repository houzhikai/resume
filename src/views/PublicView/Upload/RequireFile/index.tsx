import { Button, Input } from "antd";
import { useState } from "react";

const { TextArea } = Input;

const Datalog = () => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    const configFile = require("../../../../assets/PatternList.json");
    setValue(() => JSON.stringify(configFile));
  };
  const handleSave = () => {
    console.log("保存文件");
  };
  const handleChange = (e: any) => {
    setValue(() => e.target.value);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: 20,
        }}
      >
        <Button type="primary" onClick={handleClick}>
          Datalog页面
        </Button>
        <Button type="primary" danger onClick={handleSave}>
          保存
        </Button>
      </div>
      <TextArea rows={4} allowClear value={value} onChange={handleChange} />
    </>
  );
};
export default Datalog;
