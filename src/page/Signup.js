import React from 'react';
import {Link} from 'react-router-dom'
import BoxMemberCard from '../component/BoxMemberCard'
import bannerlogin from '../asset/img/BannerSU.png'
import logo from '../asset/img/coffee 1.png'
import glogo from '../asset/img/glogo.png'

import { toggleAuth, authRegister } from '../redux/actions/auth'
import propTypes from 'prop-types'
import { connect } from 'react-redux'


class Signup extends React.Component {
  state = {
    email : '',
    password: '',
    phoneNumber: ''
  }

  componentDidMount(){
    this.props.toggleAuth()
  }
  onRegister = (e) =>{
    e.preventDefault()
    const {email, password, phoneNumber} = this.state
    this.props.authRegister(email, password, phoneNumber)
  }

    render() {
      const {errMsg} = this.props.auth
      const {sccMsg} = this.props.auth
        return (
          <div>
            <section className="flex flex-row">
              <div className="img">
                <img className="" src={bannerlogin} alt=""/>
              </div>
              <div className="w-8/12">
                <div className="flex flex-col justify-between mb-16 mt-16">
                  <div className="logo flex justify-between mb-10">
                    <div className="flex items-center">
                      <figure className="ml-16 "><img src={logo} alt=""/></figure>
                      <figcaption className="ml-4 text-sm font-bold">Coffee Shop</figcaption>
                    </div>
                    <div className="flex justify-center items-center">
                      <button className="flex mr-16 justify-center items-center font-medium h-9 w-32 bg-yellow-400 py-3 px-8 rounded-full text-sm">
                        <Link to="/Login">
                          Login
                        </Link>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <form onSubmit={this.onRegister} action="" className="flex flex-col w-8/12">
                      <header className="mb-8 text-center text-3xl font-bold text-yellow-800">Sign Up</header>
                      {errMsg!=="" && <div className="bg-red-300 text-red-900 font-bold px-5 py-5 rounded-md text-center">{errMsg}</div>}
                      {sccMsg!=="" && <div className="bg-green-300 text-green-900 font-bold px-5 py-5 rounded-md text-center">{sccMsg}</div>}
                      <label className="mb-2 font-bold text-lg" htmlFor="email">Email Adress :</label>
                      <input onChange={e=>this.setState({email: e.target.value})} className="pl-8 border-2 rounded-2xl h-16 mb-4" type="email" name="email" id="" placeholder="Enter your email adress"/>
                      <label className="mb-2 font-bold text-lg" htmlFor="password">Password :</label>
                      <input onChange={e=>this.setState({password: e.target.value})} className="pl-8 border-2 rounded-2xl h-16 mb-4	" type="password" name="password" id="" placeholder="Enter your password"/>
                      <label className="mb-2 font-bold text-lg" htmlFor="phoneNoumber">Phone Number :</label>
                      <input onChange={e=>this.setState({phoneNumber: e.target.value})} className="pl-8 border-2 rounded-2xl h-16 mb-10" type="text" name="PhoneNumber" id="" placeholder="Enter your phone number"/>
                      <button className="mb-4 bg-yellow-400 w-full h-16 rounded-2xl font-bold text-lg" type="submit">Sign Up</button>
                      <button className="mb-4 bg-white shadow-xl w-full h-16 rounded-2xl items-center font-bold text-lg"><img className="w-6 relative left-40 top-4" src={glogo.png} alt=""/><span className="relative bottom-2">Sign Up with Google</span></button>
                    </form>
                  </div>
                </div>
              </div>
            </section>
            <BoxMemberCard />
          </div>
        );
    }
}

Signup.defaultProps = {
  toggleAuth: () => {},
  authRegister: () => {},
  auth: {},
  history: {}
}

Signup.propTypes = {
  toggleAuth: propTypes.func,
  authRegister: propTypes.func,
  auth: propTypes.object,
  history: propTypes.object,
  results: propTypes.object
}
const mapStateToProps = state => ({
  auth: state.auth
})
const mapDispatchToProps = {toggleAuth, authRegister}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);