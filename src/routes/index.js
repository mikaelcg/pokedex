//React
import React from 'react'

//Router
import { Switch, Route } from 'react-router-dom';

//Pages
import Home from '../pages/Home/Home'
import About from '../pages/About/About'

function Routes() {
    return (
        <Switch>
            <Route path="/:id?" exact component={Home} />
            <Route path="/about/:id" exact component={About} />
        </Switch>
    )
}

export default Routes