import { Card } from 'antd';
import styled from 'styled-components';
import IconFont from '../../../../components/IconFont';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`
const CardBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const ImgSize = styled.div`
  font-size: 40px;
`
const Note = styled.div`
  color: #ccc;
`
const Numerical = styled.div`
  font-weight: 800;
  font-size: 20px;
`

function Header() {
  return (
    <Wrapper>
      <Card style={{ width: '25%' }}>
        <CardBody>
          <ImgSize>
            <IconFont type='icon-like' />
          </ImgSize>
          <div style={{ marginRight: '40%' }}>
            <Note>喜欢</Note>
            <Numerical>200</Numerical>
          </div>
          <ImgSize>
            <IconFont type='icon-zhexiantu_' />
          </ImgSize>
        </CardBody>
      </Card>

      <Card style={{ width: '25%', margin: '0 10px' }}>
        <CardBody>
          <ImgSize>
            <IconFont type='icon-time' />
          </ImgSize>
          <div style={{ marginRight: '40%' }}>
            <Note>每日销售量</Note>
            <Numerical>32K</Numerical>
          </div>
          <ImgSize>
            <IconFont type='icon-touzi' />
          </ImgSize>
        </CardBody>
      </Card>

      <Card style={{ width: '25%', marginRight: 10 }}>
        <CardBody>
          <ImgSize>
            <IconFont type='icon-RectangleCopy' />
          </ImgSize>
          <div style={{ marginRight: '40%' }}>
            <Note>销售量</Note>
            <Numerical>50%</Numerical>
          </div>
          <ImgSize>
            <IconFont type='icon-zhexiantu_' />
          </ImgSize>
        </CardBody>
      </Card>

      <Card style={{ width: '25%' }}>
        <CardBody>
          <ImgSize>
            <IconFont type='icon-dingdanyichenggong' />
          </ImgSize>
          <div style={{ marginRight: '40%' }}>
            <Note>每日订单</Note>
            <Numerical>200</Numerical>
          </div>
          <ImgSize>
            <IconFont type='icon-touzi' />
          </ImgSize>
        </CardBody>
      </Card>
    </Wrapper >
  );
}

export default Header;
