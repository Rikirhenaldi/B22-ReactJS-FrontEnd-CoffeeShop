import React from 'react'
import '../index.css'
import '../App.css'
import logo from '../asset/img/coffee 1.png'
import { FaTwitter,FaFacebookF} from 'react-icons/fa'
import {RiInstagramFill} from 'react-icons/ri'
import {Link} from 'react-router-dom'

class Footer extends React.Component{
    render(){
        return(
    <footer class="flex items-center w-full h-96 bg-gray-100">
    <div class="satu">
        <div class="flex mb-5">
            <figure class="ml-40 "><img src={logo} alt=""/></figure>
            <figcaption class="ml-4 text-lg font-medium">Coffee Shop</figcaption>
        </div>
        <div class="flex mb-8 ml-40">
            <p class="mr-96 pr-10">Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans</p>
        </div>
        <div class="ml-40 text-yellow-800 mb-10 flex flex-row">
            <div class="mr-6 bg-yellow-400 w-10 h-10 rounded-full flex justify-center items-center"><FaFacebookF size="20"/></div>
            <div class="mr-6 bg-yellow-400 w-10 h-10 rounded-full flex justify-center items-center"><FaTwitter size="20"/></div>
            <div class="mr-6 bg-yellow-400 w-10 h-10 rounded-full flex justify-center items-center"><RiInstagramFill size="20"/></div>
        </div>
        <div class="ml-40 text-sm">©2020CoffeeStore</div>
    </div>

    <div class="dua mr-32">
        <header class="mb-5 font-medium">Product</header>
        <ul>
            <li class="text-sm mb-4 text-thin"><Link to="">Pricing</Link></li>
            <li class="text-sm mb-4 text-thin"><Link to="">Download</Link></li>
            <li class="text-sm mb-4 text-thin"><Link to="">Location</Link></li>
            <li class="text-sm mb-4 text-thin"><Link to="">Countries</Link></li>
            <li class="text-sm mb-4 text-thin"><Link to="">Blog</Link></li>
        </ul>
    </div>

    <div class="tiga mr-10 w-64">
        <header class="mb-5 font-medium"><Link to="">Engage</Link></header>
        <ul class="">
            <li class="text-sm mb-4 text-thin"><Link to="">FAQ</Link></li>
            <li class="text-sm mb-4 text-thin"><Link to="">Coffee Shop?</Link></li>
            <li class="text-sm mb-4 text-thin"><Link to="">About Us</Link></li>
            <li class="text-sm mb-4 text-thin"><Link to="">Privacy Policy</Link></li>
            <li class="text-sm mb-4 text-thin"><Link to="">Terms of Service</Link></li>
        </ul>
    </div>
</footer>
        )
    }
}
export default Footer