import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import App from './App.js'
import Login from './pages/login'
import Admin from './admin'
import Buttons from './pages/ui/buttons.js'
import Modal from './pages/ui/modal.js'
import Loading from './pages/ui/loading.js'
import Notification from './pages/ui/notification.js'
import Messages from './pages/ui/message.js'
import Tabs from './pages/ui/tabs.js'
import NoMatch from './pages/noMatch'
export default class IRouter extends React.Component{
  render () {
    return (
      <HashRouter>
        <App>
          <Route path="/login" component={Login}></Route>
          <Route path="/Admin" render = {() =>
            <Admin>
              <Switch>
                <Route path="/admin/ui/buttons" component={Buttons}></Route>
                <Route path="/admin/ui/modals" component={Modal}></Route>
                <Route path="/admin/ui/loadings" component={Loading}></Route>
                <Route path="/admin/ui/messages" component={Messages}></Route>
                <Route path="/admin/ui/tabs" component={Tabs}></Route>
                <Route path="/admin/ui/notification" component={Notification}></Route>
                <Route component={ NoMatch }></Route>
              </Switch>
            </Admin>
          }></Route>
        </App>
      </HashRouter>
    )
  }
}