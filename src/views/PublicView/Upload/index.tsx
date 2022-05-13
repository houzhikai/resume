import React, { useState } from 'react';
import CustomBreadcrumb from '../../../components/CustomBreadcrumb';
import UseIntroduce from '../../../components/UseIntroduce';
import { KeyTag, FormWrapper, DescribeP } from '../../../components/Div';
import { Button, Form, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const UploadView = () => {
  const [fileList] = useState([]);

  const props = {
    beforeUpload: (file: any) => {
      console.log('file', file);
      const isPNG = file.type === 'image/jpeg';
      if (!isPNG) {
        message.error(`${file.name} is not a png file`);
      }
      return isPNG || Upload.LIST_IGNORE;
    },
    onChange: (info: any) => {
      console.log(111, info.fileList);
    },
  };
  const describe = <div>
    <DescribeP>1）暂无内容，将要写一个上传组件，实现上传图片，并且可以拿到一个其地址，达到一个<KeyTag>修改头像</KeyTag>的效果。</DescribeP>
  </div>;
  return (
    <>
      <CustomBreadcrumb arr={['表单', '上传']} />
      <UseIntroduce describe={describe} />
      <a href='https://blog.csdn.net/Alanrnzearn/article/details/112268892' target='_blank' rel="noreferrer">推荐文章</a>
      <FormWrapper>
        <Form>
          <Form.Item label="上传组件" required>
            <Upload {...props} defaultFileList={fileList}>
              <Button type='primary' icon={<UploadOutlined />}>上传图片</Button>
              <div style={{ marginTop: '10px', color: 'red' }}>支持格式：所有格式 </div>
            </Upload>
          </Form.Item>
        </Form>
      </FormWrapper>
    </>
  );
};

export default UploadView;
