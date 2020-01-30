import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './views/login';
import injectContext from './store/appContext';
import Signup from './views/Signup';
import ClientWeb from './views/ClientWeb';
import NotFound from './views/Notfound';
import Calendar from './views/Calendar';
import Calendaradmin from './views/Calendaradmin';

const Layout = props => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ClientWeb} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/calendar" component={Calendar} />
                <Route exact path="/calendaradmin" component={Calendaradmin} />
                <Route exact path="/notfound" component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default injectContext(Layout);