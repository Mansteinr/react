import React from 'react'
import { Card, notification, Button } from 'antd'

export default class Notification extends React.Component{
  handleNotification = (type, placement="topRight") => {
    notification[type]({
      message: type,
      placement,
      description: 'antd基础学习'
    })
  }
  render () {
    return (
      <div>
        <Card title="通知提醒框">
          <Button type="primary" onClick={()=>this.handleNotification('success')}>success</Button>
          <Button type="primary" onClick={()=>this.handleNotification('error')}>error</Button>
          <Button type="primary" onClick={()=>this.handleNotification('info')}>info</Button>
          <Button type="primary" onClick={()=>this.handleNotification('warning')}>warning</Button>
        </Card>
        <Card title="通知提醒框">
          <Button type="primary" onClick={()=>this.handleNotification('success','topLeft')}>topLeft</Button>
          <Button type="primary" onClick={()=>this.handleNotification('error', 'topRight')}>topRight</Button>
          <Button type="primary" onClick={()=>this.handleNotification('info', 'bottomLeft')}>bottomLeft</Button>
          <Button type="primary" onClick={()=>this.handleNotification('warning', 'bottomRight')}>bottomRight</Button>
        </Card>
      </div>
    )
  }
}