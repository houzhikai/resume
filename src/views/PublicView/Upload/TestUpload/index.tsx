import { Button, Input, Upload } from "antd";
import type { UploadProps } from "antd";
import { Action } from "./Less";
import { useState } from "react";

const { TextArea } = Input;

const TestUpload = () => {
  let [value, setValue] = useState<any>("");
  let [filename, setFilename] = useState<any>("");

  const props: UploadProps = {
    showUploadList: false,
    beforeUpload: (file) => {
      const reader = new FileReader(); //创建文件对象
      setFilename(() => file.name);
      reader.readAsText(file); //读取文件的内容/URL
      reader.onload = function () {
        // 读取完成--->回调函数,result：存储文件内容,this.result访问
        // 切割文本数据 操作内容
        let content = this.result;
        setValue(() => content);
      };
      return false;
    },
  };

  const handleChange = (e: any) => {
    setValue(() => e.target.value);
  };

  const handleSave = () => {
    const arraybuffer = new TextEncoder().encode(value).buffer;
    const blob = new Blob([arraybuffer], { type: "text/plain;base64" });
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = (event) => {
      const element: any = document.createElement("a");
      element.href = event.target?.result;
      element.download = filename;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    };
  };
  return (
    <>
      {/* <input type="file" name="file" id="filePicker" onChange={show} /> */}
      <Action>
        <Upload {...props}>
          <Button type="primary" style={{ marginBottom: 20 }}>
            上传文件
          </Button>
        </Upload>

        <Button type="primary" onClick={handleSave}>
          保存
        </Button>
      </Action>
      <TextArea
        rows={6}
        id="story"
        cols={60}
        value={value}
        onChange={handleChange}
        onPressEnter={handleChange}
        placeholder="请输入内容"
        allowClear
      />
    </>
  );
};
export default TestUpload;
