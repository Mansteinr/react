import React from 'react'
import { Card, Tabs, Button, message, Icon } from 'antd'
const TabPane = Tabs.TabPane;

export default class Notification extends React.Component{
  callback = (key) => {
    message.info(key)
  }
  
  componentWillMount () {
    const panes = [{
        title: 'tab1',
        content: 'tab1',
        key: '1'
      }, {
        title: 'tab2',
        content: 'tab2',
        key: '2'
      }, {
        title: 'tab3',
        content: 'tab3',
        key: '3'
      }, {
        title: 'tab4',
        content: 'tab4',
        key: '4'
      }]
    
    this.setState({
      panes,
      activeKey: panes[0].key,
      newTabIndex: 0
    })
  }

  onChange = (activeKey) => {
    this.setState({
      activeKey
    })
  }

  onEdit = (targetKey, action) => {
    this[action](targetKey)
  }

  add = () => {
    const panes = this.state.panes;
    let index = this.state.newTabIndex++
    const activeKey = `newTab${index}`;
    panes.push({ title: `newTab${index}`, content: `Content of new Tab${index}`, key: activeKey });
    this.setState({ panes, activeKey });
  }

  remove = (targetKey) => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
    }
    this.setState({ panes, activeKey });
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
        <Card title="带图标的tabs标签">
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab={<span><Icon type="plus"/>Tab 1</span>} key="1">Tab 1</TabPane>
            <TabPane tab={<span><Icon type="delete"/>Tab 2</span>} key="2">Tab 2</TabPane>
            <TabPane tab={<span><Icon type="edit"/>Tab 3</span>} key="3">Tab 3</TabPane>
          </Tabs>
        </Card>
        <Card title="动态渲染tabs标签">
          <Tabs
            defaultActiveKey="1"
            activeKey={this.state.activeKey}
            onChange={this.onChange}
            onEdit={this.onEdit}
            type="editable-card">
            {
              this.state.panes.map(v => {
                return <TabPane tab={v.title} key={v.key}>{v.content}</TabPane>
              })
           }
          </Tabs>
        </Card>
      </div>
    )
  }
}