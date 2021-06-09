import React from 'react'
import '../index.css'
import '../App.css'
import ColdBrew from "../asset/img/ColdBrew.png";

class BoxProductDetails extends React.Component{
    render(){
        return(
            
    <section class="parentBox flex flex-row bg-gray-200 ">
    
    <div class="boxLeft flex justify-center">
        
    <div class="cardLeft flex flex-col items-center text-center space-y-20 py-10">
        <div class="productName flex flex-row space-x-1">
            <div>Favorite & Promo</div>
            <div class=" text-yellow-900 font-bold">> Cold Brew</div>
        </div>
        <div class="pictPrice uppercase space-y-6 flex flex-col justify-center items-center">
            <div><img class="w-80 h-80 rounded-full" src={ColdBrew} alt=""/></div>
            <div class=" space-y-4" >
                <div class="text-5xl font-extrabold">Cold Brew</div>
                <div class=" text-2xl font-medium">Idr 30.000</div>
            </div>
        </div>
        <div class=" space-y-4">
            <div class=" w-72 h-14 bg-yellow-900 text-white flex justify-center items-center rounded-xl"><button class="font-medium">Add to Cart</button></div>
            <div class="w-72 h-14 bg-yellow-400 text-yellow-900 flex justify-center items-center rounded-xl"><button class="font-bold">Ask a Staff</button></div>
        </div>
    </div>
   

    </div>

    
    <div class="boxRight flex flex-col justify-self-center">
        <div class="boxDetail bg-white rounded-xl mt-14 flex-col justify-center items-center px-16 py-16">
            <div class="flex-col justify-center items-center space-y-14">
                <div class=" text-yellow-900 pr-36 text-2xl">Delivery only on <span class="font-bold">Monday to friday</span> at  <span class="font-bold">1 - 7 pm</span></div>
                <div class="">
                    <p class="leading-8 text-2xl text-yellow-900">Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.</p>
                </div>
                <div class="flex flex-col justify-center items-center space-y-8">
                    <div class="font-bold text-2xl ">Choose a size</div>
                    <div class=" uppercase flex flex-row space-x-16">
                        <div class="flex justify-center items-center bg-yellow-400 w-14 h-14 rounded-full">r</div>
                        <div class="flex justify-center items-center bg-yellow-400 w-14 h-14 rounded-full">l</div>
                        <div class="flex justify-center items-center bg-yellow-400 w-14 h-14 rounded-full">xl</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="boxDelivery space-y-8 flex flex-col mt-6">
            <div class="flex justify-center items-center">
                <h2 class="font-bold text-xl">Choose Delivery Methods</h2>
            </div>
            <div class="flex flex-row justify-center space-x-12">
                <div class=" bg-yellow-900 w-24 h-10 rounded-lg flex justify-center items-center"><button class="text-white text-sm">Dine in</button></div>
                <div class=" bg-white border-2 w-28 h-10 rounded-lg flex justify-center items-center"><button class="text-sm">Door Delivery</button></div>
                <div class=" bg-white border-2 w-24 h-10 rounded-lg flex justify-center items-center"><button class=" text-sm">Pick up</button></div>
            </div>
            <div class="flex flex-row">
                <label class=" ml-32" for="">Set time :</label>
                <input class=" border-b-2 border-black ml-4 bg-gray-200 pl-3 text-sm w-80" type="text" placeholder="Enter the time you’ll arrived"/>
            </div>
        </div>
    </div>
</section>

        )
    }
}

export default BoxProductDetails