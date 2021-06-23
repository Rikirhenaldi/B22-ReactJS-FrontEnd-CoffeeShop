import React from 'react'
import '../index.css'
import '../App.css'
import netflix from '../asset/img/netflix.png'
import reddit from '../asset/img/reddit.png'
import amazon from '../asset/img/amazon.png'
import discord from '../asset/img/discord.png'
import spotify from '../asset/img/spotify.png'

class BoxPartner extends React.Component{
    render(){
        return(
          <section className="">
            <header className="text-center text-4xl font-medium mx-80 px-28">Our Partner</header>
            <ul className="partner flex mx-10 flex justify-center items-center h-72">
              <li className="listpartner mx-10"><img className="w-full h-full"  src={netflix} alt=""/></li>
              <li className=" mx-10"><img className="w-full h-full" src={reddit} alt=""/></li>
              <li className=" mx-10" ><img className="w-full h-full" src={amazon} alt=""/></li>
              <li className=" mx-10"><img className="w-full h-full" src={discord} alt=""/></li>
              <li className=" mx-10"><img className="w-full h-full"src={spotify} alt=""/></li>
            </ul>
          </section>
        )
    }
}

export default BoxPartner