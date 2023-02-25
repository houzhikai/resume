import { Button, Input } from "antd";
import { useState } from "react";

const { TextArea } = Input;

const Datalog = () => {
  let configFile = JSON.stringify(
    require("../../../../assets/PatternList.json")
  );
  const [value, setValue] = useState(configFile);

  const handleSave = () => {
    configFile = value;
    console.log({ value, configFile });
  };
  const handleChange = (e: any) => {
    setValue(() => e.target.value);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          margin: 20,
        }}
      >
        <Button type="primary" danger onClick={handleSave}>
          保存
        </Button>
      </div>
      <TextArea rows={4} allowClear value={value} onChange={handleChange} />
    </>
  );
};
export default Datalog;
