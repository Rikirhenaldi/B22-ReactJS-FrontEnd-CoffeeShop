import React from 'react'
import {Link} from 'react-router-dom'
import "../App.css"
import Hazelnut from '../asset/img/hazzelnuticon.png'
import Chickenwing from '../asset/img/chickenwing.png'
import {BiCreditCard} from 'react-icons/bi'
import {RiBankFill} from 'react-icons/ri'
import {FaTruck} from 'react-icons/fa'

class BoxPayment extends React.Component{
    render(){
        return(
            
    <div class="bannerpayment flex flex-col">
    <div class="title ml-80 mt-16">
        <h2 class="checkout text-4xl font-bold text-white w-80 tracking-wider">Checkout your item now!</h2>
    </div>

   
    <div class="boxmiddle flex flex-row justify-center">
        
        <div class="boxleft flex flex-col justify-center items-center space-y-10 my-20">
            <div class="flex justify-center items-center">
                <h2 class="text-3xl font-bold">Order Summary</h2>
            </div>
            
            <div class="boxpesanan space-y-6">
                <div class="flex flex-row items-center justify-between w-80">
                    <div><img src={Hazelnut} alt=""/></div>
                    <div class="w-28 h-24">
                        <div>Hazelnut Latte</div>
                        <div>x 1</div>
                        <div>Regular</div>
                    </div>
                    <div>
                        <h3 class="">IDR.24.0</h3>
                    </div>
                </div>
                <div class="flex flex-row items-center justify-between w-80 border-b-2 pb-8">
                    <div><img src={Chickenwing} alt=""/></div>
                    <div class="w-28 h-24">
                        <div>Chicken Fire Wings</div>
                        <div>x 2</div>
                        <div></div>
                    </div>
                    <div>
                        <h3 class="">IDR.30.0</h3>
                    </div>
                </div>
            </div>
           
            
            <div class="total flex flex-col justify-center items-center space-y-2">
                <div class="flex flex-row w-80 justify-between text-lg">
                    <div>SUBTOTAL</div>
                    <div>IDR 120.000</div>
                </div>
                <div class="flex flex-row w-80 justify-between">
                    <div>TAX & FEES</div>
                    <div>IDR 20.000</div>
                </div>
                <div class="flex flex-row w-80 justify-between">
                    <div>SHIPPING</div>
                    <div>IDR 10.000</div>
                </div>
            </div>
            <div class="flex flex-row justify-between items-center w-80">
                <div class=" font-bold text-2xl text-yellow-900">TOTAL</div>
                <div class=" font-bold text-2xl text-yellow-900">IDR 150.000</div>
            </div>
            <div>

            </div>
            
        </div>
        
        <div class="boxright flex flex-col justify-center items-center ml-20">
            <div class="adress flex flex-col">
                <div class="flex flex-row justify-between items-center mb-3 px-2">
                    <div class="text-xl text-white font-medium">Address details</div>
                    <div class="text-white"><Link to="">edit</Link></div>
                </div>
                <div class="boxadress flex flex-col px-8 pt-6 space-y-4">
                    <div class="border-b-2 h-8"><span class="font-bold">Delivery</span> to Iskandar Street</div>
                    <div class="border-b-2 h-12">Km 5 refinery road oppsite republic road, effurun, Jakarta</div>
                    <div>+62 81348287878</div>
                </div>
            </div>
            <div class="paymethod mt-16">
                <div class="flex flex-row justify-between items-center mb-3 px-2">
                    <div class="text-xl text-white font-medium">Payment Method</div>
                </div>
                <div class="boxpaymethod flex flex-col px-8 pt-6">
                    <ul class="space-y-2">
                        <li class="flex flex-row h-10 border-b-2 items-center w-full">
                            <input class="mr-2" type="radio" name="payment" id="card"/>
                            <div class="bg-red-400 w-10 h-8 flex justify-center items-center mr-2 rounded-lg" for="card" ><BiCreditCard color="white" size="22"/></div>
                            <div>Card</div>
                        </li>
                        <li class="flex flex-row h-10 border-b-2 items-center w-full">
                            <input class="mr-2" type="radio" name="payment" id="Bank"/>
                            <div class="bg-yellow-900 w-10 h-8 flex justify-center items-center mr-2 rounded-lg"for="Bank"><RiBankFill color="white" size="22"/></div>
                            <div>Bank Account</div>
                        </li>
                        <li class="flex flex-row h-10 items-center w-full">
                            <input class=" mr-2" type="radio" name="payment" id="cod"/>
                            <div class="bg-yellow-400 w-10 h-8 flex justify-center items-center mr-2 rounded-lg mr-2" for="cod"><FaTruck color="white" size="22"/></div>
                            <div>Cash on Delivery</div>
                        </li>

                    </ul>
                </div>
            </div>
            <button class="confirmpay bg-yellow-900 flex justify-center items-center mt-16">
                <div class="text-white font-bold">Confirm and Pay</div>
            </button>
        </div>
    </div>
</div>
        )
    }
}
export default BoxPayment
