import React from 'react'
import '../index.css'
import '../App.css'
import map from '../asset/img/Vector.png'
import {BiRadioCircleMarked} from 'react-icons/bi'

class BoxMap extends React.Component{
    render(){
        return(
          <section className="pt-24">
            <header className="text-center text-4xl font-medium mb-8 mx-80 px-28">Visit Our Store in the Spot on the Map Below</header>
            <p className="text-center text-lg mb-12 mx-80 px-28">See our store in every city on the spot and spen your good day there. See you soon!</p>
            <div className=" relative flex justify-center">
              <img className="m-auto" src={map} alt=""/>
              <div className="font-extrabold text-yellow-900 w-10/12 h-full m-auto absolute top-0 flex flex-row justify-between">
                <div className=" w-6/12 h-full relative font-extrabold ">
                  {/* <!-- atas kiri --> */}
                  <BiRadioCircleMarked className="far fa-dot-circle text-sm absolute top-24 left-32 bg-white rounded-full"/>
                  <BiRadioCircleMarked className="far fa-dot-circle text-xl absolute top-20 left-48 bg-white rounded-full"/>
                  <BiRadioCircleMarked className="far fa-dot-circle text-xl absolute top-24 left-64 bg-white rounded-full"/>
                  < BiRadioCircleMarked className="far fa-dot-circle text-4xl absolute top-40 left-60 bg-white rounded-full"/>
                  < BiRadioCircleMarked className="far fa-dot-circle text-sm absolute top-64 left-72 bg-white rounded-full"/>
                  < BiRadioCircleMarked className="far fa-dot-circle text-xl absolute top-52 right-72 bg-white rounded-full"/>
                  < BiRadioCircleMarked className="far fa-dot-circle text-xl absolute top-36 right-56 bg-white rounded-full"/>
                  < BiRadioCircleMarked className="far fa-dot-circle text-sm absolute top-1 right-64 bg-white rounded-full"/>
                  < BiRadioCircleMarked className="far fa-dot-circle text-xl absolute top-8 right-40 bg-white rounded-full"/>
                  < BiRadioCircleMarked className="far fa-dot-circle text-sm absolute top-6 right-20 bg-white rounded-full"/>
                  < BiRadioCircleMarked className="far fa-dot-circle text-sm absolute top-24 right-40 bg-white rounded-full"/>
                  {/* <!-- bawah kiri --> */}
                  <BiRadioCircleMarked className="far fa-dot-circle text-xl absolute bottom-20 right-52 bg-white rounded-full"/>
                  <BiRadioCircleMarked className="far fa-dot-circle text-3xl absolute bottom-36 right-44 bg-white rounded-full"/>
                  <BiRadioCircleMarked className="far fa-dot-circle text-sm absolute bottom-40 right-36 bg-white rounded-full"/>
                  <BiRadioCircleMarked className="far fa-dot-circle text-xl absolute bottom-52 right-56 bg-white rounded-full"/>
                  {/* <!-- bawah kanan ada satu disini --> */}
                  <BiRadioCircleMarked className="far fa-dot-circle text-xl absolute bottom-64 right-6 bg-white rounded-full"/>
                 
                </div>
                <div className="w-6/12 h-full relative">
                  {/* <!-- atas kanan --> */}
                  < BiRadioCircleMarked className="far fa-dot-circle text-xl absolute  bg-white rounded-full top-28 left-2"/>
                  < BiRadioCircleMarked className="far fa-dot-circle text-2xl absolute bg-white rounded-full  top-44 left-6"/>
                  < BiRadioCircleMarked className="far fa-dot-circle text-3xl absolute bg-white rounded-full  top-24 left-28"/>
                  < BiRadioCircleMarked className="far fa-dot-circle text-sm absolute  bg-white rounded-full top-20 left-48"/>
                  < BiRadioCircleMarked className="far fa-dot-circle text-4xl absolute bg-white rounded-full  top-32 left-52"/>
                  < BiRadioCircleMarked className="far fa-dot-circle text-sm absolute  bg-white rounded-full top-24 right-56"/>
                  < BiRadioCircleMarked className="far fa-dot-circle text-sm absolute  bg-white rounded-full top-20 right-32"/>
                  < BiRadioCircleMarked className="far fa-dot-circle text-xl absolute  bg-white rounded-full top-52 left-64"/>
                  < BiRadioCircleMarked className="far fa-dot-circle text-2xl absolute bg-white rounded-full  top-64 left-48"/>
                  {/* <!-- bawah kanan --> */}
                  < BiRadioCircleMarked className="far fa-dot-circle text-2xl absolute bg-white rounded-full  bottom-28 left-8"/>
                  < BiRadioCircleMarked className="far fa-dot-circle text-4xl absolute bg-white rounded-full  bottom-56 left-10"/>
                  <i className="far fa-dot-circle text-3xl absolute bottom-24 right-64"/>
                  <i className="far fa-dot-circle text-sm absolute bottom-20 right-56"/>
                  <i className="far fa-dot-circle text-xl absolute bottom-40 left-72"/>
                        
                </div>
                    
              </div>
            </div>
            
          </section>

        )
    }
}

export default BoxMap