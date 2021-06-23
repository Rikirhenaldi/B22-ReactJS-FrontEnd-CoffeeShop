import React from 'react'
import '../index.css'
import '../App.css'
import {FiSearch} from 'react-icons/fi'

class Banner extends React.Component{
    render(){
        return(
          <div className="bannerhome flex flex-col">
            <div className="row1 flex flex-row">
              <div className="titlebox flex flex-col text-white font-medium ml-40 space-y-10 mt-20">
                <h2 className="text-5xl font-bold">Start Your Day with Coffee and Good Meals</h2>
                <p className="text-xl text-white font-medium mr-14">We provide high quality beans, good taste, and healthy meals made by love just for you. Start your day with us for a bigger smile!</p>
                <button className="font-extrabold text-yellow-900 bg-yellow-400 rounded-md w-60 h-14">Get Started</button>
              </div>
              <div className="flex flex-row mt-6 ml-52 relative">
                <input className="search w-72 h-12 rounded-full flex justify-center pl-16 pr-10 relative" type="search" name="" id="" placeholder="Search"/>
                <i className="absolute top-3 left-6"><FiSearch size='25'/></i> 
              </div>
            </div>
          </div>
        )
    }
}

export default Banner