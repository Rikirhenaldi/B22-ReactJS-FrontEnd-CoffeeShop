import React from 'react'
import {Link} from 'react-router-dom'
import '../index.css'
import '../App.css'
import bannerlogin from '../asset/img/BannerSU.png'
import logo from '../asset/img/coffee 1.png'
import glogo from '../asset/img/glogo.png'
class BoxLogin extends React.Component{
    render(){
        return(
            <section class="flex flex-row">
            <div class="img">
                <img class="" src={bannerlogin} alt=""/>
            </div>
            <div class="w-8/12">
                <div class="flex flex-col justify-between mb-16 mt-16">
                    <div class="logo flex justify-between mb-10">
                        <div class="flex items-center">
                            <figure class="ml-16 "><img src={logo} alt=""/></figure>
                            <figcaption class="ml-4 text-sm font-bold">Coffee Shop</figcaption>
                        </div>
                        <div class="flex justify-center items-center">
                            <button class="flex mr-16 justify-center items-center font-medium h-9 w-32 bg-yellow-400 py-3 px-8 rounded-full text-sm">
                                <Link to="/Register">
                                    Sign Up 
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div class="flex flex-col justify-center items-center">
                        <form action="" class="flex flex-col w-8/12">
                            <header class="mb-8 text-center text-3xl font-bold text-yellow-800">Login</header>
                            <label class="mb-2 font-bold text-lg" for="email">Email Adress :</label>
                            <input class="pl-8 border-2 rounded-2xl h-16 mb-4" type="email" name="email" id="" placeholder="Enter your email adress"/>
                            <label class="mb-2 font-bold text-lg" for="password">Password :</label>
                            <input class="pl-8 border-2 rounded-2xl h-16 mb-4	" type="password" name="password" id="" placeholder="Enter your password"/>
                            <div class="mb-8 font-bold text-lg underline text-yellow-900"><Link to="/Forgotpassword">Forgot Password</Link></div>
                            <button class="mb-4 bg-yellow-400 w-full h-16 rounded-2xl font-bold text-lg">Login</button>
                            <button class="mb-4 bg-white shadow-xl w-full h-16 rounded-2xl items-center font-bold text-lg"><img class="w-6 relative left-40 top-4" src={glogo.png} alt=""/><span class="relative bottom-2">Sign Up with Google</span></button>
                        </form>
                    </div>
                </div>
            </div>
        </section> 
        )
    }
}

export default BoxLogin