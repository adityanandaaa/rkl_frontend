import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from './Pages/Home'
import About from './Pages/About'
import Career from './Pages/Career'
import CareerDetail from './Pages/CareerDetail'
import Brands from './Pages/Brands'
import NotFound from './Pages/Error'
import Test from './Pages/Test'

const Router = () => {

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Homepage} />
                <Route exact path='/about' component={About} />
                <Route exact path='/career' component={Career} />
                <Route exact path='/career-detail/:id' component={CareerDetail} />
                <Route exact path='/brands/:name' component={Brands} />
                <Route exact component={NotFound} />
                <Route exact path='/test' component={Test} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router