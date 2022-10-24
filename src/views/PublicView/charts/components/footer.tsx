import { Card, Col, Row } from 'antd';
import AgeDistribution from './blocks/ageDistribution';
import Products from './blocks/products';

const Footer = () => {
  return (
    <>
      <Row>
        <Col span={12}>
          <Card title="畅销产品" style={{ marginRight: '10px' }}>
            <Products />
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <AgeDistribution />
          </Card>
        </Col>
      </Row>

    </>
  );
}

export default Footer;
