import { Collapse } from 'antd'
import CustomBreadcrumb from '../../components/CustomBreadcrumb';
import routes from '../../routes';
import { dataList } from './dataList';
const { Panel } = Collapse;

const Done = () => {
  const _routes = routes.map((item: { name: string, path: string }) => {
    return {
      name: item.name,
      path: item.path
    }
  })
  const _dataList = dataList.map(item => {
    const res: any = []
    const title = JSON.parse(JSON.stringify(item)).title.pop()
    _routes.map((p: { path: string, name: string }) =>
      p.name === title ? res.push({
        name: item.title,
        path: p.path
      }) : null
    )
    return res
  })
  const data = _dataList.flat(Infinity)
  return (
    <Collapse
      bordered={false}
      defaultActiveKey={['1']}
      expandIconPosition='right'
      className="site-collapse-custom-collapse"
    >
      <Panel header={<h3>暂时完成的组件为<span style={{ color: 'red' }}>(支持点击跳转)</span></h3>} key="1" className='base-style'>
        {
          data.map((item: { name: string[], path: string }) => {
            return (
              <CustomBreadcrumb key={item.path} arr={item.name} href={item.path} />
            )
          })
        }
      </Panel>
    </Collapse>
  );
}

export default Done;
