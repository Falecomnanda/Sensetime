import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './views/Login';
import injectContext from './store/appContext';
import Signup from './views/Signup';
import ClientWeb from './views/ClientWeb';
import NotFound from './views/Notfound';

const Layout = props => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ClientWeb} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/notfound" component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default injectContext(Layout);