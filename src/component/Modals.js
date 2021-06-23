import React from 'react'
import '../index.css'
import '../App.css'
import {Link} from 'react-router-dom'

class Modals extends React.Component{
    render(){
        return(
          <div className="modals w-full h-screen fixed top-0 flex justify-center items-center">
            <div className="boxmodals flex flex-col justify-center items-center space-y-10 text-center px-20">
              <div className="text-2xl ">Are you sure want to delete the selected items?</div>
              <div className="flex flex-row justify-center items-center space-x-32">
                <div className="w-32 h-14 bg-white border-2 border-yellow-900 rounded-lg flex justify-center items-center"><button className="text-yellow-900 font-bold">Cancel</button></div>
                <div><Link to="/History"><button className="w-32 h-14 bg-yellow-900 rounded-lg flex justify-center items-center text-white font-bold">Delete</button></Link></div>
              </div>
            </div>
          </div>
        )
    }
}
export default Modals