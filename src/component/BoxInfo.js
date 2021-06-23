import React from 'react'
import '../index.css'
import '../App.css'
import {FaUser} from 'react-icons/fa'
import {MdLocationOn} from 'react-icons/md'
import {AiOutlineHeart} from 'react-icons/ai'


class BoxInfo extends React.Component{
    render(){
        return(
          <div className="boxinfo relative flex h-52 m-auto -top-24 rounded-xl justify-between items-center bg-white shadow-xl px-24 text-xl">
            <div className="box1 flex flex-row border-r-2 pr-28 justify-center items-center">
              <div className="flex justify-center items-center bg-yellow-400 w-16 h-16 rounded-full">
                <FaUser size='22' />
              </div>
              <div className="ml-4 flex-col">
                <div className="font-extrabold text-2xl">90+</div>
                <div className="text-gray-500 ">Staff</div>
              </div>
            </div>
            <div className="box1 flex flex-row border-r-2 pr-28 justify-center items-center">
              <div className="flex justify-center items-center bg-yellow-400 w-16 h-16 rounded-full">
                <MdLocationOn size='30'/>
              </div>
              <div className="ml-4 flex-col">
                <div className="font-extrabold text-2xl">30+</div>
                <div className="text-gray-500 ">Store</div>
              </div>
            </div><div className="box1 flex flex-row justify-center items-center">
              <div className="flex justify-center items-center bg-yellow-400 w-16 h-16 rounded-full">
                <AiOutlineHeart size='30'/>
              </div>
              <div className="ml-4 flex-col">
                <div className="font-extrabold text-2xl">800+</div>
                <div className="text-gray-500 ">Customers</div>
              </div>
            </div>
          </div>
        )
    }
}
export default BoxInfo