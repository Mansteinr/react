import React from 'react'
import { Card,Form, Button, Input, InputNumber, Checkbox, Select, Radio, Switch, DatePicker, TimePicker, Upload, Icon, message } from 'antd'
import moment from 'moment'



class Reg extends React.Component{
  state = {
    loading: false,
  }

  getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  handleChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      this.getBase64(info.file.originFileObj, imageUrl => this.setState({
        imageUrl,
        loading: false,
      }));
    }
  }

  handleSubmit = () => {
    let userInfo = this.props.form.getFieldsValue()
    console.log(userInfo)
  }
  render () {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: {
        xs: 24,
        sm:4
      },
      wrapperCol: {
        xs: 24,
        sm: 12
      }
    }
    return (
      <div>
        <Card title="注册表单">
          <Form layout="horizontal">
            <Form.Item label="用户名" {...formItemLayout}>
              {
                getFieldDecorator('userName', {
                  initialValue: '',
                  rules: [
                    {required: true, message: '用户名不能为空'}
                  ]
                })(
                  <Input placeholder=""></Input>
                )
              }
            </Form.Item>
            <Form.Item label="密码" {...formItemLayout}>
              {
                getFieldDecorator('password', {
                  initialValue: '',
                  rules: [
                    {required: true, message: '密码不能为空'}
                  ]
                })(
                  <Input placeholder=""></Input>
                )
              }
            </Form.Item>
            <Form.Item label="性别" {...formItemLayout}>
              {
                getFieldDecorator('sex', {
                  initialValue: '1'
                })(
                  <Radio.Group>
                    <Radio value="1">男</Radio>
                    <Radio vlaue="2">女</Radio>
                  </Radio.Group>
                )
              }
            </Form.Item>
            <Form.Item label="年龄" {...formItemLayout}>
              {
                getFieldDecorator('age', {
                  initialValue: '18'
                })(
                  <InputNumber></InputNumber>
                )
              }
            </Form.Item>
            <Form.Item label="当前状况" {...formItemLayout}>
              {
                getFieldDecorator('state', {
                  initialValue: '2'
                })(
                  <Select defaultValue= {{ key: '1' }}>
                    <Select.Option value="1">1</Select.Option>
                    <Select.Option value="2">2</Select.Option>
                    <Select.Option value="3">3</Select.Option>
                    <Select.Option value="4">4</Select.Option>
                    <Select.Option value="5">5</Select.Option>
                    <Select.Option value="6">6</Select.Option>
                    <Select.Option value="7">7</Select.Option>
                    <Select.Option value="8">8</Select.Option>
                    <Select.Option value="9">9</Select.Option>
                    <Select.Option value="19">19</Select.Option>
                    <Select.Option value="29">39</Select.Option>
                    <Select.Option value="49">49</Select.Option>
                    <Select.Option value="39">39</Select.Option>
                    <Select.Option value="59">59</Select.Option>
                    <Select.Option value="69">69</Select.Option>
                    <Select.Option value="79">79</Select.Option>
                    <Select.Option value="89">89</Select.Option>
                    <Select.Option value="99">99</Select.Option>
                  </Select>
                )
              }
            </Form.Item>
            <Form.Item label="标签" {...formItemLayout}>
              {
                getFieldDecorator('state', {
                  initialValue: '2'
                })(
                  <Select mode="multiple" defaultValue= {{ key: '1' }}>
                    <Select.Option value="1">1</Select.Option>
                    <Select.Option value="2">2</Select.Option>
                    <Select.Option value="3">3</Select.Option>
                    <Select.Option value="4">4</Select.Option>
                    <Select.Option value="5">5</Select.Option>
                    <Select.Option value="6">6</Select.Option>
                    <Select.Option value="7">7</Select.Option>
                    <Select.Option value="8">8</Select.Option>
                    <Select.Option value="9">9</Select.Option>
                  </Select>
                )
              }
            </Form.Item>
            <Form.Item label="是否学生" {...formItemLayout}>
              {
                getFieldDecorator('isStduent', {
                  valuePropName: 'checked',
                  initialValue: '2'
                })(
                  <Switch />
                )
              }
            </Form.Item>
            <Form.Item label="生日" {...formItemLayout}>
              {
                getFieldDecorator('isStduent', {
                  initialValue: moment(new Date())
                })(
                  <DatePicker
                    showTime
                    format="YYYY-MM-DD HH:mm:ss"
                  />
                )
              }
            </Form.Item>
            <Form.Item label="联系地址" {...formItemLayout}>
              {
                getFieldDecorator('address', {
                })(
                  <Input.TextArea placeholder="请输入地址" autosize={{
                    minRows: 4,
                    maxRows: 6,
                  }} />
                )
              }
            </Form.Item>
            <Form.Item label="早起时间" {...formItemLayout}>
              {
                getFieldDecorator('time', {
                  initialValue: moment(new Date())
                })(
                  <TimePicker
                    showTime
                    format="HH:mm:ss"
                  />
                )
              }
            </Form.Item>
            <Form.Item label="头像" {...formItemLayout}>
              {
                getFieldDecorator('avatar')(
                  <Upload
                    listType="picture-card"
                    onChange={this.handleChange}
                    showUploadList={false}
                    action="http://jsonplaceholder.typicode.com/posts/"
                  >
                   <Icon type="plus"></Icon>
                  </Upload>
                )
              }
            </Form.Item>
            <Form.Item  {...{wrapperCol: {
              xs: 24,
              sm: {
                span: 12,
                offset: 4
              }
            }}}>
              {
                getFieldDecorator('avatar')(
                  <Checkbox>我已阅读<a href="#">协议</a></Checkbox>
                )
              }
            </Form.Item>
            <Form.Item  {...{wrapperCol: {
              xs: 24,
              sm: {
                span: 12,
                offset: 4
              }
            }}}>
              <Button type="primary" onClick={this.handleSubmit}>注册</Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Form.create()(Reg)