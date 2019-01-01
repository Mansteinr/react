import React from 'react'
import { Card, Buttom, Spin, Icon, Alert } from 'antd'

export default class Loadings extends React.Component{
  render () {
    const icon = <Icon type="loading"></Icon>
    return (
      <div>
        <Card title="Spin用法">
          <Spin size="smaall"></Spin>
          <Spin/>
          <Spin size="large"></Spin>
          <Spin indicator={icon}></Spin>
        </Card>
        <Card title="内容Spin用法">
          <Alert
            message="React"
            description="welcome to antd"
            type="info"
          ></Alert>
          <Spin>
            <Alert
              message="React"
              description="welcome to antd"
              type="warning"
            ></Alert>
          </Spin>
          <Spin tip="加载中...">
            <Alert
              message="React"
              description="welcome to antd"
              type="warning"
            ></Alert>
          </Spin>
          <Spin tip="加载中..." indicator={icon}>
            <Alert
              message="React"
              description="welcome to antd"
              type="warning"
            ></Alert>
          </Spin>
        </Card>
      </div>
    )
  }
}