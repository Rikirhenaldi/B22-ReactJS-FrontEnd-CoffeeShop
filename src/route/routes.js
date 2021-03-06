import React, { Component } from 'react'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import Home from '../page/Home'
import Login from '../page/Login'
import Product from '../page/Product'
import Signup from '../page/Signup'
import YourChart from '../page/YourChart'
import History from '../page/History'
import HistoryDetails from '../page/HistoryDetails'
import ForgotPassword from '../page/ForgotPassword'
import ProductDetails from '../page/ProductDetails'
import Profile from '../page/Profile'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import {connect} from 'react-redux'
import propTypes from 'prop-types'
import PrivateRoute from '../component/PrivateRoute'
import {authLogOut} from '../redux/actions/auth'
import Search from '../page/Search'
import Chats from '../page/Chats'

class Routes extends Component{
  render(){
    const {onAuth} = this.props.auth
    return(
      <Router>
        {!onAuth && <Navbar />}
        <Switch>
          <Route path="/Register" component={Signup} />
          <Route path="/Login" component={Login} />
          <PrivateRoute path="/Profile">
            <Profile/>
          </PrivateRoute>
          <Route path="/Product/Category/:id" component={Product} />
          <PrivateRoute path="/Yourcart">
            <YourChart/>
          </PrivateRoute>
          <PrivateRoute path="/Chat">
            <Chats/>
          </PrivateRoute>
          <PrivateRoute path="/History">
            <History/>
          </PrivateRoute>
          <PrivateRoute path="/DetailHistory/:id">
            <HistoryDetails/>
          </PrivateRoute>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={Search} />
          <Route path="/Forgotpassword" component={ForgotPassword} />
          <Route  path="/Product/:id" component={ProductDetails} />
        </Switch>
        <Footer/>
      </Router>
    )   
  }
}

Routes.propTypes = {
  auth : propTypes.object
}
const mapStateToProps = state => ({
  auth: state.auth
})
const mapDispatchToProps = {authLogOut}

export default connect(mapStateToProps, mapDispatchToProps)(Routes)