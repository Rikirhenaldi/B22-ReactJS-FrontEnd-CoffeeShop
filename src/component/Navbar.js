import React from 'react'
import {Link} from 'react-router-dom'
import '../index.css'
import '../App.css'
import logo from '../asset/img/coffee 1.png'
import logoChat from '../asset/img/chat (1) 1.png'
import userPict from '../asset/img/1fp.png'
import {FiSearch} from 'react-icons/fi'
import {FaSignOutAlt} from 'react-icons/fa'
import propTypes from 'prop-types'
import { authLogOut } from '../redux/actions/auth'
import {connect} from 'react-redux'

const Navbar = ({auth, authLogOut}) => {
        return(
          <nav className="w-full h-32 flex justify-between">
            <span className="flex flex-1 items-center">
              <div className="logo ml-40 "><img src={logo} alt=""/></div>
              <figcaption className="ml-4 text-lg font-bold">Coffee Shop</figcaption>
            </span>
            <ul className="mid flex justify-center items-center">
              <li className="currentnav flex ml-10 justify-center align-middle text-sm hover:text-yellow-800"><Link to="/">Home</Link></li>
              <li className="flex ml-10 justify-center align-middle text-sm hover:text-yellow-800"><Link to="/Product/Category/5">Product</Link></li>
              <li className="flex ml-10 justify-center align-middle text-sm hover:text-yellow-800"><Link to="/Yourcart">Your Cart</Link></li>
              <li className="flex ml-10 justify-center align-middle text-sm hover:text-yellow-800"><Link to="/History">History</Link></li>
            </ul>
            <ul className="rightnav flex justify-center items-center space-x-8">
              {auth.token !==null ? 
                <ul className="listrightnav flex justify-center items-center space-x-8">
                  <li className="flex justify-end font-medium text-3xl">
                    <Link to="/products"><FiSearch size='25'/></Link>
                  </li>
                  <li className="flex flex-row  justify-end font-medium text-4xl rounded-full">
                    <Link to="/Chat"><img className="w-8" src={logoChat} alt=""/></Link>
                    <div className=" relative bottom-2 right-10 w-4 h-4 rounded-full bg-red-800 text-xs text-white flex justify-center items-center">1</div>
                  </li>
                  <li className="flex justify-end font-medium text-sm rounded-full"><Link to="/Profile"><img className="rounded-full w-8" src={userPict} alt=""/></Link></li>
                  <li className="flex justify-end">
                    <button className="w-8 h-8 bg-yellow-400 py-2 px-2 rounded-full flex justify-center items-center" onClick={authLogOut} ><FaSignOutAlt size='15'/></button> 
                  </li> 
                </ul> : (
                  <>
                    <li className="flex justify-end font-medium text-sm hover:bg-yellow-400 py-2 px-8 rounded-full"><Link to="/Login">Login</Link></li>
                    <li className="flex justify-end font-medium text-sm bg-yellow-400 py-2 px-8 rounded-full"><Link to="/Register">Sign Up</Link></li>
                  </>
              )}
            </ul>
          </nav>
        )
}

Navbar.defaultProps = {
  auth: {}
}
Navbar.propTypes = {
  auth: propTypes.object
}

const mapStateToProps = state => ({
  auth: state.auth
})
const mapDispatchToProps = {authLogOut}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)