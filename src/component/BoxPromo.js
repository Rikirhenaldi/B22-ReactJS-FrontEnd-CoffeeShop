import React from 'react'
import '../index.css'
import '../App.css'

class BoxPromo extends React.Component{
    render(){
        return(
          <section className="h-28 bg-gray-100">
            <div className="box relative -top-20 w-9/12 m-auto h-52 bg-white flex justify-between items-center m-auto shadow-xl">
              <div className="flex flex-col ml-20 pr-80 ">
                <header className="font-medium text-4xl mb-3">Cek our promo today!</header>
                <p className="font-sm">Let's see the deals and pick yours!</p>
              </div>
              <div className="mr-20 flex justify-center items-center">
                <button className="font-bold text-sm bg-yellow-400 w-44 h-10 rounded-lg shadow-xl">See Promo</button>
              </div>
            </div>
          </section>
        )
    }
}
export default BoxPromo