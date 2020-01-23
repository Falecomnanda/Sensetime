import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/home';

import injectContext from './store/appContext';
import Signup from './views/Signup';
import ClientWeb from './views/ClientWeb';

const Layout = props => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ClientWeb} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route render={() => <h1>Not Found</h1>} />
            </Switch>
        </BrowserRouter>
    )
}

export default injectContext(Layout);