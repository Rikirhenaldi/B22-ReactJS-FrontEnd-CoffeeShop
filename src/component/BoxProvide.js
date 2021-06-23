import React from 'react'
import '../index.css'
import '../App.css'
import provideImg from '../asset/img/35744 1.png'
import {BiCheckCircle} from 'react-icons/bi'

class BoxProvide extends React.Component{
    render(){
        return(
          <section className="flex mt-28">
            <figure className="ml-40">
              <img src={provideImg} alt=""/>
            </figure>
            <div className="mx-32">
              <header className="font-medium text-4xl mr-16 mb-6">We Provide Good Coffee and Healthy Meals</header>
              <p className="mb-6 leading-8"> You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
              <ul className="leading-10">
                <li className="flex flex-row items-center">
                  <BiCheckCircle className="text-green-400 mr-3" />
                  <h1>High quality beans</h1>
                </li>
                <li className="flex flex-row items-center">
                  <BiCheckCircle className="text-green-400 mr-3" />
                  <h1>Healthy meals, you can request the ingredients</h1>
                </li>
                <li className="flex flex-row items-center">
                  <BiCheckCircle className="text-green-400 mr-3" />
                  <h1>Chat with our staff to get better experience for ordering</h1>
                </li>
                <li className="flex flex-row items-center">
                  <BiCheckCircle className="text-green-400 mr-3" />
                  <h1> Free member card with a minimum purchase of IDR 200.000.</h1>
                </li>
              </ul>
            </div>
          </section>    
        )
    }
}

export default BoxProvide