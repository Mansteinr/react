import React from 'react'
import { Card, Tabs, Button, message } from 'antd'
const TabPane = Tabs.TabPane;

export default class Notification extends React.Component{
  callback = (key) => {
    message.info(key)
  }
  render () {
    return (
      <div>
        <Card title="tabs标签">
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="Tab 1" key="1">Tab 1</TabPane>
            <TabPane tab="Tab 2" key="2">Tab 2</TabPane>
            <TabPane tab="Tab 3" key="3">Tab 3</TabPane>
          </Tabs>
        </Card>
        <Card title="tabs标签">
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="Tab 1" key="1">Tab 1</TabPane>
            <TabPane tab="Tab 2" key="2">Tab 2</TabPane>
            <TabPane tab="Tab 3" key="3">Tab 3</TabPane>
          </Tabs>
        </Card>
      </div>
    )
  }
}