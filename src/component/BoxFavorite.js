import React from 'react'
import '../index.css'
import '../App.css'
import f1 from '../asset/img/1.png'
import f2 from '../asset/img/2.png'
import f3 from '../asset/img/3.png'

class BoxFavorite extends React.Component{
    render(){
        return(
          <section className="mt-28 bg-gray-100 w-full pt-24 pb-20">

            <header className="text-center text-4xl font-medium mb-8 ">Here is People’s Favorite</header>
            <p className="text-center text-lg">Let’s choose and have a bit taste of poeple’s favorite. It might be yours too!</p>
    
            <div className="cardBox flex flex-row justify-between mx-28 my-28">
              <div className="cardBoxFavorite bg-white w-80 border-2 rounded-xl border-gray-400 flex-col justify-between space-y-6 items-center">
                <div className="profile mt-20 flex-col">
                  <div className="img rounded-full flex justify-center"><img className="rounded-full mb-12" src={f1} alt=""/></div>
                  <header className="text-center font-medium text-lg">Hazelnut Latte</header>
                </div>
                <div className="innerlist flex flex-1 justify-center">
                  <ul className="leading-10 text-sm">
                    <li className="font-thin text-current"><i className="fas fa-check-circle text-green-400 mr-2"></i>HazelnutSyrup</li>
                    <li className="font-thin text-current"><i className="fas fa-check-circle text-green-400 mr-2"></i> Wanilla Whipped Cream</li>
                    <li className="font-thin text-current"><i className="fas fa-check-circle text-green-400 mr-2"></i> Ice / Hot</li>
                    <li className="font-thin text-current"><i className="fas fa-check-circle text-green-400 mr-2"></i>Sliced Banana on Top</li>
                  </ul>
                </div>
    
                <div className="price flex flex-col justify-end items-center">
                  <header className="mb-6 text-center text-2xl font-medium">IDR 25.000</header>
                  <button className="text-xs font-bold border-2 border-yellow-400 px-14 py-3 rounded-full hover:bg-yellow-400">Order Now</button>
                </div>
              </div>
                
              <div className="cardBoxFavorite bg-white w-80 border-2 rounded-xl border-gray-400 flex-col justify-between space-y-6 items-center">
                <div className="profile mt-20 flex-col">
                  <div className="img rounded-full flex justify-center"><img className="rounded-full mb-12" src={f2} alt=""/></div>
                  <header className="text-center font-medium text-lg">Pinky Promise</header>
                </div>
    
                <div className="innerlist flex flex-1 justify-center">
                  <ul className="leading-10 text-sm">
                    <li className="font-thin text-current"><i className="fas fa-check-circle text-green-400 mr-2"></i>1 Shot of Coffee</li>
                    <li className="font-thin text-current"><i className="fas fa-check-circle text-green-400 mr-2"></i> Vanilla Whipped Cream</li>
                    <li className="font-thin text-current"><i className="fas fa-check-circle text-green-400 mr-2"></i> Chocolate Biscuits</li>
                    <li className="font-thin text-current"><i className="fas fa-check-circle text-green-400 mr-2"></i>Strawberry Syrup</li>
                    <li className="font-thin text-current"><i className="fas fa-check-circle text-green-400 mr-2"></i>Sliced Strawberry on top</li>
                  </ul>
                </div>
    
                <div className="price flex flex-col justify-end items-center">
                  <header className="mb-6 text-center text-2xl font-medium">IDR 30.000</header>
                  <button className="text-xs font-bold border-2 border-yellow-400 px-14 py-3 rounded-full hover:bg-yellow-400">Order Now</button>
                </div>
              </div>
                
              <div className="cardBoxFavorite bg-white w-80 border-2 rounded-xl border-gray-400 flex-col justify-between space-y-6 items-center">
                <div className="profile mt-20 flex-col">
                  <div className="img rounded-full flex justify-center"><img className="rounded-full mb-12" src={f3} alt=""/></div>
                  <header className="text-center font-medium text-lg">Chicken Wings</header>
                </div>
    
                <div className="innerlist flex flex-1 justify-center">
                  <ul className="leading-10 text-sm">
                    <li className="font-thin text-current"><i className="fas fa-check-circle text-green-400 mr-2"></i> Wings</li>
                    <li className="font-thin text-current"><i className="fas fa-check-circle text-green-400 mr-2"></i> Drum Sticks</li>
                    <li className="font-thin text-current"><i className="fas fa-check-circle text-green-400 mr-2"></i> Mayonaise and Lemon</li>
                    <li className="font-thin text-current"><i className="fas fa-check-circle text-green-400 mr-2"></i>Hot Fride</li>
                    <li className="font-thin text-current"><i className="fas fa-check-circle text-green-400 mr-2"></i>Secret Recipe</li>
                    <li className="font-thin text-current"><i className="fas fa-check-circle text-green-400 mr-2"></i>Buy one Get 1 only for Dine in</li>
                  </ul>
                </div>
    
                <div className="price flex flex-col justify-end items-center">
                  <header className="mb-6 text-center text-2xl font-medium">IDR 40.000</header>
                  <button className="text-xs font-bold border-2 border-yellow-400 px-14 py-3 rounded-full hover:bg-yellow-400">Order Now</button>
                </div>
              </div>
            </div>
          </section>        
        )
    }
}

export default BoxFavorite