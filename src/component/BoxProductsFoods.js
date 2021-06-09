import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
import '../App.css'
import imgpromo from '../asset/img/spageti.png'
import axios from 'axios'

class BoxProductsFoods extends React.Component{
    state = {
        data: []
    }
    componentDidMount(){
        this.getData()
    }
    getData = async() => {
        const {data} = await axios.get('http://localhost:8080/products/category/3')
        this.setState({data: data.results})
    }
    render(){
        return(
            <section class="flex w-full">
            <div className="cupon border-r-2 border-t-2">
                <div className="flex flex-col justify-center items-center text-center space-y-14 py-20">
                    <div>
                        <h2 className="text-2xl font-bold text-yellow-800">Promo for you</h2>
                    </div>
                    <div className="mx-14">
                        <p>Coupons will be updated every weeks. Check them out!</p>
                    </div>
                    
                    <div className="boxModel flex flex-row items-center">
                        <div className="cardCupon bg-yellow-400 rounded-2xl flex flex-col justify-between items-center">
                            <div className="flex flex-col flex-1 justify-center items-center border-b-2 border-dashed border-black space-y-4 pb-4">
                                <img className="rounded-full w-32 mx-auto mt-8" src={imgpromo} alt=""/>
                                <div className="mx-10 flex justify-center items-center text-center text-xl font-bold">Beef Spaghetti 20% OFF</div>
                                <p className="mx-10 flex justify-center items-center text-center text-sm">Buy 1 Choco Oreo and get 20% off for Beef Spaghetti</p>
                            </div>
                            <div className="cuponCode flex flex-col justify-center items-center text-center mt-4">
                                <ul className="space-y-3 text-sm">
                                    <li className="uppercase">coupon code</li>
                                    <li className="uppercase text-2xl font-bold">fnpr15rg</li>
                                    <li className=" text-xs">Valid untill October 10th 2020</li>
                                </ul>
                            </div>
                        </div>
                
                        <div className="cuponDecoration1 bg-black rounded-r-2xl"></div>
                        <div className="cuponDecoration2 bg-yellow-900 rounded-r-2xl"></div>
                    </div>
    
                    <div className="bg-yellow-800 w-72 h-14 flex justify-center items-center rounded-2xl">
                        <button className="text-xl text-white">Apply Coupon</button>
                    </div>
                    <div className="flex flex-col justify-start text-left space-y-3">
                        <h2 className="text-lg">Terms and Condition</h2>
                        <ol className="text-sm list-decimal space-y-3">
                            <li>You can only apply 1 coupon per day</li>
                            <li>It only for dine in</li>
                            <li>Buy 1 get 1 only for new user</li>
                            <li>Should make member card to apply coupon</li>
                        </ol>
                    </div>
                </div>
            </div>
    
            
            <div className="flex-1 space-y-12 border-t-2 ">
                <div className="navigasi mx-28 text-xl text-gray-400 mt-8">
                    <ul className="flex flex-row justify-between items-center text-center">
                        <li><Link to="/Product/Category/5" className="hover:text-yellow-800">Favorite Products</Link></li>
                        <li><Link to="/Product/Category/1" className="hover:text-yellow-800">Coffee</Link></li>
                        <li><Link to="/Product/Category/2" className="hover:text-yellow-800">Non Coffee</Link></li>
                        <li><Link to="/Product/Category/3" className="text-yellow-800 font-bold underline">Foods</Link></li>
                        <li><Link to="/Product/Category/4" className="hover:text-yellow-800">Add-on</Link></li>
                    </ul>
                </div>
         
            <div className="gridmenu grid lg:grid-cols-4 gap-10 m-auto px-10">
            {this.state.data.map((product)=>{
                return(
                    <Link to={`/Product/${product.id}`} key={product.id}>
                        <div className="menuBox bg-white rounded-3xl flex flex-col items-center text-center w-44 h-64 py-4 shadow-2xl space-y-2">
                            <div><img className="rounded-full w-32 h-32 shadow-2xl" src={product.img_link} alt=""/></div>
                            <div className="flex flex-1"><h2 class="font-extrabold text-xl mx-8 leading-4 ">{product.name}</h2></div>
                            <div className="flex justify-end"><h3>IDR. {product.price}</h3></div>
                        </div>
                </Link>
                )
            })}
                </div>
            </div>
        </section>    
        )
    }
}

export default BoxProductsFoods