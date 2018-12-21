import React from 'react'
// import MenuConfig from '../../config/meunConfig'
import { Menu, Icon } from 'antd'
const SubMenu = Menu.SubMenu

export default class NavLeft extends React.Component{
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

  state = {
    openKeys: ['sub1'],
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

  render () {
    return (
      <div className="logo">
        <img src="" alt="" />
        <h1></h1>
      </div>
    )
  }
}