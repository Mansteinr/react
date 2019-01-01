import React from 'react'
import MenuConfig from '../../config/meunConfig'
import { Menu, Icon } from 'antd'
import { NavLink } from 'react-router-dom'
import './index.less'
const SubMenu = Menu.SubMenu

export default class NavLeft extends React.Component{
  rootSubmenuKeys = ['/admin/form', '/admin/table', '/admin/charts','/admin/order']
  state = {
    openKeys: ['sub1']
  }
  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }

  componentWillMount () {
    const menuTreeNode = this.renderMenu(MenuConfig)
    this.setState({
      menuTreeNode
    })
  }
  // 菜单渲染
  renderMenu = (data) => {
    return data.map(v => {
      if (v.children) {
        this.rootSubmenuKeys.push(v.key)
        return (
          <SubMenu key={v.key} title={<span><Icon type={v.type} /><span>{v.title}</span></span>}>
            {this.renderMenu(v.children)}
          </SubMenu>
        )
      }
      return <Menu.Item  key={v.key} ><Icon type={v.type}/> <NavLink to={v.key}> {v.title} </NavLink></Menu.Item>
    })
  }
  

  render () {
    return (
      <div>
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt="" />
          <h1>管理系统</h1>
        </div>
        <Menu
          mode="inline"
          theme="dark"
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
          style={{ width: 256 }}
        >
          { this.state.menuTreeNode }
        </Menu>
      </div>
    )
  }
}