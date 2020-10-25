import React, { Component } from 'react'
import { createBrowserHistory } from 'history'
import {
    Router,
    Route,
    Switch
} from 'react-router-dom'

import LoginPage from 'components/login/LoginPage'
import DashboardPage from 'components/dashboard/DashboardPage'

//? layouts
// import AdminLayout from 'layouts/Admin.jsx'

const hist = createBrowserHistory()

class App extends Component {
    render() {
        return (
            <Router history={hist}>
                {/* <Switch> */}
                    <Route path="/login" component={LoginPage} />
                    <Route path="/dashboard" component={DashboardPage} />
                {/* </Switch> */}
            </Router>
        )
    }
}

export default App