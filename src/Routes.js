import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Second from './Second'
import { Third, Fourth } from './Third'
import Home from './Pages/Home'
import Signup from './Pages/auth/Signup'
import Signin from './Pages/auth/Signin'
import Cart from './Pages/Cart'
import Createpwd from './Pages/auth/Createpwd'
import Deals from './Pages/Deals'



const Routes = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/signup" component={Signup}/>
                    <Route exact path="/signin" component={Signin}/>
                    <Route exact path="/cart" component={Cart}/>
                    <Route exact path="/password" component={Createpwd}/>
                    <Route exact path="/deals" component={Deals}/>



                    {/* < Route exact path="/second" component={Second}/>
                    < Route exact path="/third" component={Third}/> */}
                </Switch>
            </Router>

        </>
    )
}

export default Routes
