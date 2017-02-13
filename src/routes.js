import React from 'react'
import IndexRoute from 'react-router/lib/IndexRoute'
import Route from 'react-router/lib/Route'
import App from './components/App'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import About from './components/About'


export default (
    <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='dashboard' component={Dashboard} />
        <Route path='login' component={Login} />
        <Route path='about' component={About} />
    </Route>
)
