import React, { useState } from 'react';
import { Layout, Row, Col, Button } from 'antd';
import CustomBreadcrumb from '../../../components/CustomBreadcrumb';
import UseIntroduce from '../../../components/UseIntroduce';
import '../../../style/view-style/button.scss';
import IconFont from '../../../components/IconFont';
import {
    PoweroffOutlined,
    AntCloudOutlined,
    CloudDownloadOutlined,
    SearchOutlined,
  } from '@ant-design/icons';

const ButtonGroup = Button.Group

const ButtonView = () => {
    const [loading, setLoading] = useState(false)
    const [iconLoading, setIconLoading] = useState(false)
    return (
        <Layout className='button animated fadeIn'>
            <CustomBreadcrumb arr={['通用', '按钮']} />
            <UseIntroduce describe ="标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。"/>
            <div>
                <Row gutter={8}>
                    <Col span={12}>
                        <div className='base-style'>
                            <Button type='primary'>Primary</Button>
                            <Button>Default</Button>
                            <Button type='dashed'>Dashed</Button>
                            <Button type='danger'>Danger</Button>
                            <Button type='link'>Link</Button>
                        </div>
                        <div className='base-style'>
                            <Button type='primary' loading>
                                Loading
                            </Button>
                            <Button type='primary' size='small' loading>
                                Loading
                            </Button>
                            <Button type='primary' loading={loading} onClick={() => setLoading(true)}>
                                Click me!
                            </Button>
                            <Button
                                type='primary'
                                icon={<PoweroffOutlined />}
                                loading={iconLoading}
                                onClick={() => setIconLoading(true)}>
                                Click me!
                            </Button>
                            <Button type='primary' loading />
                            <Button type='primary' shape='circle' loading />
                            <Button type='danger' shape='round' loading />
                        </div>
                        <div className='base-style' style={{ height: '247px'}}>
                            <h4>Basic</h4>
                            <ButtonGroup>
                                <Button>large</Button>
                                <Button>small</Button>
                                <Button>mini</Button>
                            </ButtonGroup>
                            <ButtonGroup>
                                <Button disabled>L</Button>
                                <Button disabled>M</Button>
                                <Button disabled>R</Button>
                            </ButtonGroup>

                            <h4>With Icon</h4>
                            <ButtonGroup>
                                <Button type='primary'>
                                    <IconFont type='left' />
                                    Go back
                                </Button>
                                <Button type='primary'>
                                    Go forward
                                    <IconFont type='right' />
                                </Button>
                            </ButtonGroup>
                            <ButtonGroup>
                                <Button type='primary' icon={<AntCloudOutlined />} />
                                <Button type='primary' icon={<CloudDownloadOutlined />} />
                            </ButtonGroup>
                            <ButtonGroup>
                                <Button type='primary' size='small' icon={<AntCloudOutlined />} />
                                <Button type='primary' size='small' icon={<CloudDownloadOutlined />} />
                            </ButtonGroup>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className='base-style'>
                            <Button type='primary' shape='circle' icon={<SearchOutlined />} />
                            <Button type='primary' shape='circle'>
                                A
                            </Button>
                            <Button type='primary' icon={<SearchOutlined />}>
                                Search
                            </Button>
                            <Button shape='circle' icon={<SearchOutlined />} />
                            <Button icon={<SearchOutlined />}>Search</Button>
                            <Button type='dashed' shape='circle'icon={<SearchOutlined />} />
                            <Button type='dashed'icon={<SearchOutlined />}>
                                Search
                            </Button>
                        </div>
                        <div className='base-style'>
                            <Button type='primary'>Primary</Button>
                            <Button type='primary' disabled>
                                Primary(disabled)
                            </Button>
                            <Button>Default</Button>
                            <Button disabled>Default(disabled)</Button>
                            <Button type='dashed'>Dashed</Button>
                            <Button type='dashed' disabled>
                                Dashed(disabled)
                            </Button>
                        </div>
                        <div className='base-style'>
                            <Button type='primary' block>
                                Primary
                            </Button>
                            <Button block>Default</Button>
                            <Button type='dashed' block>
                                Dashed
                            </Button>
                            <Button type='danger' block>
                                Danger
                            </Button>
                            <Button type='link' block>
                                Link
                            </Button>
                        </div>
                    </Col>
                </Row>
            </div>
        </Layout>
    )
}

export default ButtonView
