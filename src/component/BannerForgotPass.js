import React from 'react'
import '../index.css'
import '../App.css'


class BannerForgotPass extends React.Component{
    render(){
        return(
            <div class="banner2 text-white flex flex-col justify-start items-center text-center space-y-24 pt-36">
            <div class="forgotpas tracking-wider">
                <div class="text-6xl font-bold">Forgot your password?</div>
                <div class="text-2xl font-bold">Don’t worry, we got your back!</div>
            </div>
            <div class="inputmail flex flex-row">
                <input class=" mr-10 pl-8 text-xl text-black" type="text" placeholder="Enter your email adress to get link"/>
                <button class=" bg-yellow-400 text-xl font-bold text-yellow-900">Send</button>
            </div>
            <div class="flex flex-col justify-center items-center text-center space-y-6 ">
                <div class="btn trans text-3xl font-medium">Click here if you didn’t receive any link in 2 minutes</div>
                <div class="btn choco bg-yellow-900 w-96 flex justify-center items-center "><button class="text-2xl font-bold">Resend Link</button></div>
                <div class="text-3xl font-medium">01:54</div>
            </div>
            <div class="resendlink">
    
            </div>
        </div> 
        )
    }
}
export default BannerForgotPass