import React from 'react'

import { Card, Button, message } from 'antd'

export default class Messages extends React.Component{
  handleMessage = (type) => {
    message[type](type)
  }
  render () {
    return (
      <div>
        <Card title="基础提示框">
          <Button type="primary" onClick={()=>this.handleMessage('success')}>success</Button>
          <Button type="primary" onClick={()=>this.handleMessage('info')}>info</Button>
          <Button type="primary" onClick={()=>this.handleMessage('warning')}>warning</Button>
          <Button type="primary" onClick={()=>this.handleMessage('error')}>error</Button>
          <Button type="primary" onClick={()=>this.handleMessage('loading')}>loading</Button>
        </Card>
      </div>
    )
  }
}