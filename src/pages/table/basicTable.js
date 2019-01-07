import React from 'react'
import { Card, Table } from 'antd'
import { Record } from 'immutable';
export default class basicTable extends React.Component{
  state = {
 }
  componentDidMount () {
    const dataSource = [
      {
        id: '0',
        userName: 'jacl',
        sex: 'jacl',
        state: 'jacl',
        interest: 'jacl',
        birthday: '2019-10-12',
        address: '2019-10-12',
        time: '09:00'
     }
    ]
    this.setState({
      dataSource
    })
    console.log(this.state.dataSource)
 }
  render () {
    const columns = [
      {
        title: 'id',
        dataIndex: 'id'
      }, {
        title: '用户名',
        dataIndex: 'userName'
      }, {
        title: '性别',
        dataIndex: 'sex'
      }, {
        title: '状态',
        dataIndex: 'state'
      }, {
        title: '爱好',
        dataIndex: 'interest'
      }, {
        title: '生日',
        dataIndex: 'birthday'
      }, {
        title: '地址',
        dataIndex: 'address'
      }, {
        title: '早起时间',
        dataIndex: 'time'
      }
    ]
    return (
      <div>
        <Card title="basic table">
          <Table
            rowKey={record => record.title}
            dataSource={this.state.dataSource}
            columns={columns}
            pagination={false}
          />
        </Card>
      </div>
    )
  }
}