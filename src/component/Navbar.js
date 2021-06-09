import React from 'react'
import {Link} from 'react-router-dom'
import '../index.css'
import '../App.css'
import logo from '../asset/img/coffee 1.png'

class Navbar extends React.Component{
    render(){
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
                <li className="flex justify-end font-medium text-sm hover:bg-yellow-400 py-2 px-8 rounded-full"><Link to="/Login">Login</Link></li>
                <li className="flex justify-end font-medium text-sm bg-yellow-400 py-2 px-8 rounded-full"><Link to="/Register">Sign Up</Link></li>
            </ul>
        </nav>
        )
    }
}
export default Navbar