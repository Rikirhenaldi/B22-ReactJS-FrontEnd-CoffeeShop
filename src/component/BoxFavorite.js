import React from 'react'
import '../index.css'
import '../App.css'
import f1 from '../asset/img/1.png'
import f2 from '../asset/img/2.png'
import f3 from '../asset/img/3.png'

class BoxFavorite extends React.Component{
    render(){
        return(
            <section class="mt-28 bg-gray-100 w-full pt-24 pb-20">

            <header class="text-center text-4xl font-medium mb-8 ">Here is People’s Favorite</header>
            <p class="text-center text-lg">Let’s choose and have a bit taste of poeple’s favorite. It might be yours too!</p>
    
            <div class="cardBox flex flex-row justify-between mx-28 my-28">
                <div class="cardBoxFavorite bg-white w-80 border-2 rounded-xl border-gray-400 flex-col justify-between space-y-6 items-center">
                    <div class="profile mt-20 flex-col">
                        <div class="img rounded-full flex justify-center"><img class="rounded-full mb-12" src={f1} alt=""/></div>
                        <header class="text-center font-medium text-lg">Hazelnut Latte</header>
                    </div>
                    <div class="innerlist flex flex-1 justify-center">
                        <ul class="leading-10 text-sm">
                            <li class="font-thin text-current"><i class="fas fa-check-circle text-green-400 mr-2"></i>HazelnutSyrup</li>
                            <li class="font-thin text-current"><i class="fas fa-check-circle text-green-400 mr-2"></i> Wanilla Whipped Cream</li>
                            <li class="font-thin text-current"><i class="fas fa-check-circle text-green-400 mr-2"></i> Ice / Hot</li>
                            <li class="font-thin text-current"><i class="fas fa-check-circle text-green-400 mr-2"></i>Sliced Banana on Top</li>
                        </ul>
                    </div>
    
                    <div class="price flex flex-col justify-end items-center">
                    <header class="mb-6 text-center text-2xl font-medium">IDR 25.000</header>
                    <button class="text-xs font-bold border-2 border-yellow-400 px-14 py-3 rounded-full hover:bg-yellow-400">Order Now</button>
                    </div>
                </div>
                
                <div class="cardBoxFavorite bg-white w-80 border-2 rounded-xl border-gray-400 flex-col justify-between space-y-6 items-center">
                    <div class="profile mt-20 flex-col">
                        <div class="img rounded-full flex justify-center"><img class="rounded-full mb-12" src={f2} alt=""/></div>
                        <header class="text-center font-medium text-lg">Pinky Promise</header>
                    </div>
    
                    <div class="innerlist flex flex-1 justify-center">
                        <ul class="leading-10 text-sm">
                            <li class="font-thin text-current"><i class="fas fa-check-circle text-green-400 mr-2"></i>1 Shot of Coffee</li>
                            <li class="font-thin text-current"><i class="fas fa-check-circle text-green-400 mr-2"></i> Vanilla Whipped Cream</li>
                            <li class="font-thin text-current"><i class="fas fa-check-circle text-green-400 mr-2"></i> Chocolate Biscuits</li>
                            <li class="font-thin text-current"><i class="fas fa-check-circle text-green-400 mr-2"></i>Strawberry Syrup</li>
                            <li class="font-thin text-current"><i class="fas fa-check-circle text-green-400 mr-2"></i>Sliced Strawberry on top</li>
                        </ul>
                    </div>
    
                    <div class="price flex flex-col justify-end items-center">
                    <header class="mb-6 text-center text-2xl font-medium">IDR 30.000</header>
                    <button class="text-xs font-bold border-2 border-yellow-400 px-14 py-3 rounded-full hover:bg-yellow-400">Order Now</button>
                    </div>
                </div>
                
                <div class="cardBoxFavorite bg-white w-80 border-2 rounded-xl border-gray-400 flex-col justify-between space-y-6 items-center">
                    <div class="profile mt-20 flex-col">
                        <div class="img rounded-full flex justify-center"><img class="rounded-full mb-12" src={f3} alt=""/></div>
                        <header class="text-center font-medium text-lg">Chicken Wings</header>
                    </div>
    
                    <div class="innerlist flex flex-1 justify-center">
                        <ul class="leading-10 text-sm">
                            <li class="font-thin text-current"><i class="fas fa-check-circle text-green-400 mr-2"></i> Wings</li>
                            <li class="font-thin text-current"><i class="fas fa-check-circle text-green-400 mr-2"></i> Drum Sticks</li>
                            <li class="font-thin text-current"><i class="fas fa-check-circle text-green-400 mr-2"></i> Mayonaise and Lemon</li>
                            <li class="font-thin text-current"><i class="fas fa-check-circle text-green-400 mr-2"></i>Hot Fride</li>
                            <li class="font-thin text-current"><i class="fas fa-check-circle text-green-400 mr-2"></i>Secret Recipe</li>
                            <li class="font-thin text-current"><i class="fas fa-check-circle text-green-400 mr-2"></i>Buy one Get 1 only for Dine in</li>
                        </ul>
                    </div>
    
                    <div class="price flex flex-col justify-end items-center">
                    <header class="mb-6 text-center text-2xl font-medium">IDR 40.000</header>
                    <button class="text-xs font-bold border-2 border-yellow-400 px-14 py-3 rounded-full hover:bg-yellow-400">Order Now</button>
                    </div>
                </div>
            </div>
        </section>        
        )
    }
}

export default BoxFavorite