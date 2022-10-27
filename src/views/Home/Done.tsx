import { Collapse, Divider } from 'antd'
import CustomBreadcrumb from '../../components/CustomBreadcrumb';
import { dataList } from './dataList';
const { Panel } = Collapse;

const Done = () => {
  return (
    <Collapse
      bordered={false}
      defaultActiveKey={['1']}
      expandIconPosition='right'
      className="site-collapse-custom-collapse"
    >
      <Panel header={<h3>暂时完成的组件为</h3>} key="1" className='base-style'>
        {
          dataList.map((item: { title: string[], path: string }) => {
            return (
              <CustomBreadcrumb key={item.path} arr={item.title} href={item.path} />
            )
          })
        }
      </Panel>
    </Collapse>
  );
}

export default Done;
