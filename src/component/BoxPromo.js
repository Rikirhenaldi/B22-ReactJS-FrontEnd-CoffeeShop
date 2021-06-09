import React from 'react'
import '../index.css'
import '../App.css'

class BoxPromo extends React.Component{
    render(){
        return(
            <section class="h-28 bg-gray-100">
                <div class="box relative -top-20 w-9/12 m-auto h-52 bg-white flex justify-between items-center m-auto shadow-xl">
                    <div class="flex flex-col ml-20 pr-80 ">
                        <header class="font-medium text-4xl mb-3">Cek our promo today!</header>
                        <p class="font-sm">Let's see the deals and pick yours!</p>
                    </div>
                    <div class="mr-20 flex justify-center items-center">
                        <button class="font-bold text-sm bg-yellow-400 w-44 h-10 rounded-lg shadow-xl">See Promo</button>
                    </div>
                </div>
    </section>
        )
    }
}
export default BoxPromo