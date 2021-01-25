import React from 'react'
import { Route, Switch } from 'react-router-dom'
import {Airlines} from './Airlines/Airlines'
import {Airline} from './Airline/Airline'

export const App = () => {
    return (<Switch>
        <Route exact path="/" component={ Airlines } />
        <Route exact path="/airlines/:slug" component={ Airline } />
    </Switch>);
}