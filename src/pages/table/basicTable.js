import React from 'react'
import { Card, Table, Modal, Pagination } from 'antd'
import axios from '../../common/axios'
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

    this.request()
  }
  request = () => {
    axios.ajax('/table/list1', 'get').then((res) => {
      this.setState({
        dataSource2: res.result.list
      })
    })
  }
  onRowClick = (record, index) => {
    let selectKey = [index + 1]
    Modal.info({
      title: '信息',
      content: `用户名：${record.userName},用户爱好：${record.interest}`
    })
    this.setState({
      selectedRowKeys: selectKey,
      selectItem: record
    })
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
        dataIndex: 'sex',
        render (sex) {
          return sex === 1 ? '男' : '女'
        }
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
    const rowSelection = {
      type: 'radio',
      selectedRowKeys: this.state.selectedRowKeys
    }
    const rowCheckSelection = {
      type: 'checkbox',
      onChange: (selectedRowKeys, selectRows) => {
        this.setState({
          selectedRowKeys,
          selectRows
        })
        console.log(this.state)
      },
      selectedRowKeys: this.state.selectedRowKeys
    }
    return (
      <div>
        <Card title="basic table">
          <Table
            rowKey={record => record.id}
            dataSource={this.state.dataSource}
            columns={columns}
            pagination={false}
          />
        </Card>
        <Card title="动态渲染表格">
          <Table
            rowKey={record => record.id}
            dataSource={this.state.dataSource2}
            columns={columns}
            pagination={false}
          />
        </Card>
        <Card title="单选">
          <Table
            rowKey={record => record.id}
            rowSelection={rowSelection}
            onRow={(record, index) => {
              return {
                onClick: () => {
                  this.onRowClick(record, index)
                 }
              }
            }}
            dataSource={this.state.dataSource2}
            columns={columns}
            pagination={false}
          />
        </Card>
        <Card title="复选">
          <Table
            rowKey={record => record.id}
            rowSelection={rowCheckSelection}
            dataSource={this.state.dataSource2}
            columns={columns}
            pagination={false}
          />
        </Card>
        <Card title="分页">
          <Table
            rowKey={record => record.id}
            dataSource={this.state.dataSource2}
            columns={columns}
            pagination={true}
          />
        </Card>
      </div>
    )
  }
}