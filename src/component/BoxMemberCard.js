import React from 'react'
import '../index.css'
import '../App.css'

export class BoxMemberCard extends React.Component{
    render(){
        return(
          <section className="bg-gray-100 h-28">
            <div className="box relative -top-28 w-9/12 m-auto h-52 bg-white flex justify-between items-center m-auto shadow-xl rounded-lg">
              <div className="flex flex-col ml-20 ">
                <header className="font-semibold text-3xl mb-3 pr-96 ">Get your member card now!</header>
                <p className="font-sm">Let's join with our member and enjoy the deals.</p>
              </div>
              <div className="mr-20 flex justify-center items-center">
                <button className="font-semibold text-sm bg-yellow-400 w-52 h-12 rounded-lg shadow-xl">Create Now</button>
              </div>
            </div>
          </section>
        )
    }
}

export default BoxMemberCard