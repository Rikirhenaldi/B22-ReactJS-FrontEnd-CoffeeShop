import React from 'react'
import '../index.css'
import '../App.css'
import profile1 from '../asset/img/1p.png'
import profile2 from '../asset/img/2p.png'
import profile3 from '../asset/img/3p.png'
import {AiFillStar} from 'react-icons/ai'
import {BiRightArrowCircle, BiLeftArrowCircle} from 'react-icons/bi'

class BoxComment extends React.Component{
    render(){
        return(
            
    <section class="mt-28">
    <header class="text-center text-4xl font-medium mb-8 mx-80 px-28">Loved by Thousands of Happy Customer</header>
    <p class="text-center text-lg mb-12 mx-80 px-28">These are the stories of our customers who have visited us with great pleasure.</p>

    <div class="slidewraper overflow-x-hidden">
        <div class="slider p-14 overflow-x-scroll">
            <div class="boxwarp flex flex-row space-x-10">
                <div class="boxcomment border-yellow-900 border-2 rounded-xl flex flex-col pt-6 pl-4 space-y-4">
                    <div class="flex flex-row justify-between items-center">
                        <div class=" flex justify-center items-center">
                            <img src={profile1} alt=""/>
                        </div>
                        <div class="username flex flex-col justify-center pl-4">
                            <div class="font-bold text-xl">Viezh Robert</div>
                            <div>Warsaw, Poland</div>
                        </div>
                        <div class="flex flex-1 flex-row space-x-4 justify-center items-center" >
                            <div class="text-xl">4.5</div> 
                            <AiFillStar class="fas fa-star text-yellow-400 "/>
                        </div>
                    </div>
                    <div>
                        <p class="flex px-6 text-sm leading-8" >“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!</p>        
                    </div>
                </div>
    
                <div class="boxcomment border-yellow-900 border-2 rounded-xl flex flex-col pt-6 pl-4 space-y-4 ">
                    <div class="flex flex-row justify-between items-center">
                        <div class=" flex justify-center items-center">
                            <img src={profile2} alt=""/>
                        </div>
                        <div class="username flex flex-col justify-center pl-4">
                            <div class="font-bold text-xl">Yessica Christy</div>
                            <div>Shanxi, China</div>
                        </div>
                        <div class="flex flex-1 flex-row space-x-4 justify-center items-center" >
                            <div class="text-xl">4.5</div> 
                            <AiFillStar class="fas fa-star text-yellow-400 "/>
                        </div>
                    </div>
                    <div>
                        <p class="flex px-6  text-sm leading-8">““I like it because I like to travel far and still can make my day better just by drinking their Hazelnut Latte</p>        
                    </div>
                </div>
    
                
                <div class="boxcomment border-yellow-900 border-2 rounded-xl flex flex-col pt-6 pl-4 space-y-4">
                    <div class="flex flex-row justify-between items-center">
                        <div class=" flex justify-center items-center">
                            <img src={profile3} alt=""/>
                        </div>
                        <div class="username flex flex-col justify-center pl-4">
                            <div class="font-bold text-xl">Kim Young Jou</div>
                            <div>Seoul, South Korea</div>
                        </div>
                        <div class="flex flex-1 flex-row space-x-4 justify-center items-center" >
                            <div class="text-xl">4.5</div> 
                            <AiFillStar class="fas fa-star text-yellow-400 "/>
                        </div>
                    </div>
                    <div>
                        <p class="flex px-6 text-sm leading-8 w-full">““This is very unusual for my taste, I haven’t liked coffee before but their coffee is the best! and yup, you have to order the chicken wings, the best in town!</p>        
                    </div>
                </div>

                <div class="boxcomment border-yellow-900 border-2 rounded-xl flex flex-col pt-6 pl-4 space-y-4 ">
                    <div class="flex flex-row justify-between items-center">
                        <div class=" flex justify-center items-center">
                            <img src={profile1} alt=""/>
                        </div>
                        <div class="username flex flex-col justify-center pl-4">
                            <div class="font-bold text-xl">Viezh Robert</div>
                            <div>Warsaw, Poland</div>
                        </div>
                        <div class="flex flex-1 flex-row space-x-4 justify-center items-center" >
                            <div class="text-xl">4.5</div> 
                            <AiFillStar class="fas fa-star text-yellow-400 "/>
                        </div>
                    </div>
                    <div>
                        <p class="flex px-6 text-sm leading-8 w-full">“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!</p>        
                    </div>
                </div>
                
                <div class="boxcomment border-yellow-900 border-2 rounded-xl flex flex-col pt-6 pl-4 space-y-4 ">
                    <div class="flex flex-row justify-between items-center">
                        <div class=" flex justify-center items-center">
                            <img src={profile1} alt=""/>
                        </div>
                        <div class="username flex flex-col justify-center pl-4">
                            <div class="font-bold text-xl">Viezh Robert</div>
                            <div>Warsaw, Poland</div>
                        </div>
                        <div class="flex flex-1 flex-row space-x-4 justify-center items-center" >
                            <div class="text-xl">4.5</div> 
                            <AiFillStar class="fas fa-star text-yellow-400 "/>
                        </div>
                    </div>
                    <div>
                        <p class="flex px-6 text-sm py-6 leading-8 w-full">“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!</p>        
                    </div>
                </div>
            </div>
        </div>    
    </div>
    
<div class="flex justify-between mt-20 w-full h-40 bg-white flex justify-center items-center relative bottom-28">
    <div class=" mt-5">
        <ul class="flex">
            <li class="ml-28 mr-5"><button class=""><i class="fas fa-circle hover:text-yellow-800"></i></button></li>
            <li class="mr-5"><button class=""><i class="fas fa-circle hover:text-yellow-800"></i></button></li>
            <li class="mr-5"><button class=""><i class="fas fa-circle hover:text-yellow-800"></i></button></li>
            <li class="mr-5"><button class=""><i class="fas fa-circle hover:text-yellow-800"></i></button></li>
        </ul>
    </div>
    <div class="">
        <ul class="flex flex-row">
            <li class="ml-7"><button><BiLeftArrowCircle class="text-5xl text-yellow-800 bg-grey-800  rounded-full"/></button></li>
            <li class="mr-20 ml-7"><button><BiRightArrowCircle class="text-5xl text-yellow-800 bg-grey-800 rounded-full"/></button></li>
        </ul>
    </div>
</div>
</section>

        )
    }
}

export default BoxComment