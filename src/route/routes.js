import React, { Component } from 'react'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import Home from '../page/Home'
import Login from '../page/Login'
import Product from '../page/Product'
import Signup from '../page/Signup'
import YourChart from '../page/YourChart'
import History from '../page/History'
import HistoryModal from '../page/HistoryModal'
import ForgotPassword from '../page/ForgotPassword'
import ProductDetails from '../page/ProductDetails'
import Profile from '../page/Profile'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import {connect} from 'react-redux'
import propTypes from 'prop-types'
import PrivateRoute from '../component/PrivateRoute'


class Routes extends Component{
  render(){
    const {onAuth} = this.props.auth
    return(
      <Router>
        {!onAuth && <Navbar/>}
        <Switch>
          <Route path="/Register" component={Signup} />
          <Route path="/Login" component={Login} />
          <Route path="/Profile" component={Profile} />
          <Route path="/Product/Category/:id" component={Product} />
          {/* <Route path="/Yourcart" component={YourChart} /> */}
          <PrivateRoute path="/Yourcart">
            <YourChart/>
          </PrivateRoute>
          <PrivateRoute path="/History">
            <History/>
          </PrivateRoute>
          {/* <Route path="/History" component={History} /> */}
          <Route path="/" exact component={Home} />
          <Route path="/Deletehistory" component={HistoryModal} />
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
export default connect(mapStateToProps)(Routes)