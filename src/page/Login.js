import React from 'react';
import { connect } from 'react-redux';
import BoxMemberCard from '../component/BoxMemberCard'
import propTypes from 'prop-types'

import {Link} from 'react-router-dom'
import '../index.css'
import '../App.css'
import bannerlogin from '../asset/img/BannerSU.png'
import logo from '../asset/img/coffee 1.png'
import glogo from '../asset/img/glogo.png'

import { toggleAuth, authLogin } from '../redux/actions/auth'

class Login extends React.Component {
    state = {
      email : '',
      password: ''
    }

    componentDidMount(){
      this.props.toggleAuth()
    }

    onLogin = (e) =>{
      e.preventDefault()
      const {email, password} = this.state
      this.props.authLogin(email, password)
    }
    componentDidUpdate(){
      const {token} = this.props.auth
      if(token!==null){
        this.props.toggleAuth()
        this.props.history.push('/')
      }
    }
    render() {
      const {errMsg} = this.props.auth
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
                      <Link to="/Register">
                        Sign Up 
                      </Link>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <form onSubmit={this.onLogin} className="flex flex-col w-8/12">
                    <div className="mb-8 text-center text-3xl font-bold text-yellow-800">Login</div>
                    {errMsg!=="" && <div className="bg-red-300 text-red-900 font-bold px-5 py-5 rounded-md">{errMsg}</div>}
                    <label className="mb-2 font-bold text-lg">Email Adress :</label>
                    <input onChange={e=>this.setState({email: e.target.value})} className="pl-8 border-2 rounded-2xl h-16 mb-4" type="email" placeholder="Enter your email adress"/>
                    <label className="mb-2 font-bold text-lg">Password :</label>
                    <input onChange={e=>this.setState({password: e.target.value})} className="pl-8 border-2 rounded-2xl h-16 mb-4	" type="password" placeholder="Enter your password"/>
                    <div className="mb-8 font-bold text-lg underline text-yellow-900"><Link to="/Forgotpassword">Forgot Password</Link></div>
                    <button className="mb-4 bg-yellow-400 w-full h-16 rounded-2xl font-bold text-lg" type="submit" >Login</button>
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

Login.defaultProps = {
  toggleAuth: () => {},
  authLogin: () => {},
  auth: {},
  history: {}
}

Login.propTypes = {
  toggleAuth: propTypes.func,
  authLogin: propTypes.func,
  auth: propTypes.object,
  history: propTypes.object
}
const mapStateToProps = state => ({
  auth: state.auth
})
const mapDispatchToProps = {toggleAuth, authLogin}

export default connect(mapStateToProps, mapDispatchToProps)(Login)