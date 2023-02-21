import React, { useState } from "react";
import CustomBreadcrumb from "../../../components/CustomBreadcrumb";
import UseIntroduce from "../../../components/UseIntroduce";
import { KeyTag, FormWrapper, DescribeP } from "../../../components/Div";
import { Button, Form, Upload, message, Divider } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import TestUpload from "./TestUpload";
import RequireFile from "./RequireFile";
// import * as file from "../../../files/testFile.txt";

const UploadView = () => {
  const [fileList] = useState([]);
  const props = {
    beforeUpload: (file: any) => {
      console.log("file", file);
      const isPNG = file.type === "image/jpeg";
      if (!isPNG) {
        message.error(`${file.name} is not a png file`);
      }
      return isPNG || Upload.LIST_IGNORE;
    },
    onChange: (info: any) => {
      console.log(111, info.fileList);
    },
  };
  const describe = (
    <div>
      <DescribeP>
        1）暂无内容，将要写一个上传组件，实现上传图片，并且可以拿到一个其地址，达到一个
        <KeyTag>修改头像</KeyTag>的效果。
      </DescribeP>
    </div>
  );

  return (
    <>
      <CustomBreadcrumb arr={["通用", "上传"]} />
      <UseIntroduce describe={describe} />
      <a
        href="https://blog.csdn.net/Alanrnzearn/article/details/112268892"
        target="_blank"
        rel="noreferrer"
      >
        推荐文章
      </a>
      <FormWrapper>
        <Form>
          <Form.Item label="上传组件" required>
            <Upload {...props} defaultFileList={fileList}>
              <Button type="primary" icon={<UploadOutlined />}>
                上传图片
              </Button>
              <div style={{ marginTop: "10px", color: "red" }}>
                支持格式：所有格式
              </div>
            </Upload>
          </Form.Item>
        </Form>
      </FormWrapper>

      <Divider plain>测试upload读存文件</Divider>
      <TestUpload />

      <Divider plain>测试引入JSON文件</Divider>
      <RequireFile />

      <Divider plain>测试iframe</Divider>
      <iframe src="www.baidu.com" width="100%" height="500">
        <p>
          <a href="https://www.example.com">点击打开嵌入页面</a>
        </p>
      </iframe>
    </>
  );
};

export default UploadView;
