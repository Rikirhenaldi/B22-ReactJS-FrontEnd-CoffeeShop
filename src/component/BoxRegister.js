import React from 'react'
import {Link} from 'react-router-dom'
import '../index.css'
import '../App.css'
import bannerlogin from '../asset/img/BannerSU.png'
import logo from '../asset/img/coffee 1.png'
import glogo from '../asset/img/glogo.png'

export class BoxRegister extends React.Component{
    render(){
        return(
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
                  <form action="" className="flex flex-col w-8/12">
                    <header className="mb-8 text-center text-3xl font-bold text-yellow-800">Sign Up</header>
                    <label className="mb-2 font-bold text-lg" for="email">Email Adress :</label>
                    <input className="pl-8 border-2 rounded-2xl h-16 mb-4" type="email" name="email" id="" placeholder="Enter your email adress"/>
                    <label className="mb-2 font-bold text-lg" for="password">Password :</label>
                    <input className="pl-8 border-2 rounded-2xl h-16 mb-4	" type="password" name="password" id="" placeholder="Enter your password"/>
                    <label className="mb-2 font-bold text-lg" for="phoneNoumber">Phone Number :</label>
                    <input className="pl-8 border-2 rounded-2xl h-16 mb-10" type="text" name="PhoneNumber" id="" placeholder="Enter your phone number"/>
                    <button className="mb-4 bg-yellow-400 w-full h-16 rounded-2xl font-bold text-lg">Sign Up</button>
                    <button className="mb-4 bg-white shadow-xl w-full h-16 rounded-2xl items-center font-bold text-lg"><img className="w-6 relative left-40 top-4" src={glogo.png} alt=""/><span className="relative bottom-2">Sign Up with Google</span></button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        )
    }
}
export default BoxRegister