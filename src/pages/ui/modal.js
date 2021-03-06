import React from 'react'
import { Card, Button, Modal } from 'antd'
import './ui.less'
export default class Modals  extends React.Component{
  state = {
    showModal1: false,
    showModal2: false,
    showModal3: false,
    showModal4: false
  }
  handleOpen = (type) => {
    this.setState({
      [type]: true
    })
  }
  handleConfirm = (type) => {
    Modal[type]({
      title: type,
      content: 'antd学习',
      onOk () {
        console.log('ok')
      },
      onCancel () {
        console.log('onCancel')
      }
    })
  }
  render() {
    return (
      <div>
        <Card title="基础模态框">
          <Button type="primary" onClick={()=>this.handleOpen('showModal1')}>open</Button>
          <Button type="primary" onClick={()=>this.handleOpen('showModal2')}>自定义页脚</Button>
          <Button type="primary" onClick={()=>this.handleOpen('showModal3')}>顶部20px弹框</Button>
          <Button type="primary" onClick={()=>this.handleOpen('showModal4')}>水平垂直居中</Button>
        </Card>
        <Card title="信息确认框">
          <Button type="primary" onClick={()=>this.handleConfirm('confirm')}>confirm</Button>
          <Button type="primary" onClick={()=>this.handleConfirm('info')}>info</Button>
          <Button type="primary" onClick={()=>this.handleConfirm('success')}>success</Button>
          <Button type="primary" onClick={()=>this.handleConfirm('warning')}>warning</Button>
        </Card>
        <Modal
          title="React"
          visible={this.state.showModal1}
          onCancel={() => {
            this.setState({
              showModal1: false
            })
          }}
        >
          <p>react antd框架基础知识学习</p>
        </Modal>
        <Modal
          title="React"
          visible={this.state.showModal2}
          okText="确定"
          cancelText="取消"
          onCancel={() => {
            this.setState({
              showModal2: false
            })
          }}
        >
          <p>react antd框架基础知识学习</p>
        </Modal>
        <Modal
          title="React"
          visible={this.state.showModal3}
          okText="确定"
          style={{top: 20}}
          cancelText="取消"
          onCancel={() => {
            this.setState({
              showModal3: false
            })
          }}
        >
          <p>react antd框架基础知识学习</p>
        </Modal>
        <Modal
          title="React"
          visible={this.state.showModal4}
          wrapClassName="vertical-center-modal"
          okText="确定"
          cancelText="取消"
          onCancel={() => {
            this.setState({
              showModal4: false
            })
          }}
        >
          <p>react antd框架基础知识学习</p>
        </Modal>
      </div>
    )
  }
}