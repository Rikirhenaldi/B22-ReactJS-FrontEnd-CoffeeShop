import React from 'react'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import Home from '../page/Home'
import Login from '../page/Login'
import Product from '../page/Product'
import ProductsCoffee from '../page/ProductsCoffee'
import ProductsNonCoffee from '../page/ProductsNonCoffee'
import ProductsFoods from '../page/ProductsFoods'
import Signup from '../page/Signup'
import YourChart from '../page/YourChart'
import History from '../page/History'
import HistoryModal from '../page/HistoryModal'
import ForgotPassword from '../page/ForgotPassword'
import ProductDetails from '../page/ProductDetails'
import Profile from '../page/Profile'

function routes(){
    return(
        <Router>
            <Switch>
                <Route path="/Register" exact component={Signup} />
            </Switch>
            <Switch>
                <Route path="/Login" exact component={Login} />
            </Switch>
            <Switch>
                <Route path="/Profile" exact component={Profile} />
            </Switch>
            <Switch>
                <Route path="/Product/Category/5" exact component={Product} />
            </Switch>
            <Switch>
                <Route path="/Product/Category/1" exact component={ProductsCoffee} />
            </Switch>
            <Switch>
                <Route path="/Product/Category/2" exact component={ProductsNonCoffee} />
            </Switch>
            <Switch>
                <Route path="/Product/Category/3" exact component={ProductsFoods} />
            </Switch>
            <Switch>
                <Route path="/Yourcart" exact component={YourChart} />
            </Switch>
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>
            <Switch>
                <Route path="/History" exact component={History} />
            </Switch>
            <Switch>
                <Route path="/Deletehistory" exact component={HistoryModal} />
            </Switch>
            <Switch>
                <Route path="/Forgotpassword" exact component={ForgotPassword} />
            </Switch>
            <Switch>
                <Route  path="/Product/:id" exact component={ProductDetails} />
            </Switch>
        </Router>
    )
}
export default routes