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
            
          <section className="mt-28">
            <header className="text-center text-4xl font-medium mb-8 mx-80 px-28">Loved by Thousands of Happy Customer</header>
            <p className="text-center text-lg mb-12 mx-80 px-28">These are the stories of our customers who have visited us with great pleasure.</p>

            <div className="slidewraper overflow-x-hidden">
              <div className="slider p-14 overflow-x-scroll">
                <div className="boxwarp flex flex-row space-x-10">
                  <div className="boxcomment border-yellow-900 border-2 rounded-xl flex flex-col pt-6 pl-4 space-y-4">
                    <div className="flex flex-row justify-between items-center">
                      <div className=" flex justify-center items-center">
                        <img src={profile1} alt=""/>
                      </div>
                      <div className="username flex flex-col justify-center pl-4">
                        <div className="font-bold text-xl">Viezh Robert</div>
                        <div>Warsaw, Poland</div>
                      </div>
                      <div className="flex flex-1 flex-row space-x-4 justify-center items-center" >
                        <div className="text-xl">4.5</div> 
                        <AiFillStar className="fas fa-star text-yellow-400 "/>
                      </div>
                    </div>
                    <div>
                      <p className="flex px-6 text-sm leading-8" >“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!</p>        
                    </div>
                  </div>
    
                  <div className="boxcomment border-yellow-900 border-2 rounded-xl flex flex-col pt-6 pl-4 space-y-4 ">
                    <div className="flex flex-row justify-between items-center">
                      <div className=" flex justify-center items-center">
                        <img src={profile2} alt=""/>
                      </div>
                      <div className="username flex flex-col justify-center pl-4">
                        <div className="font-bold text-xl">Yessica Christy</div>
                        <div>Shanxi, China</div>
                      </div>
                      <div className="flex flex-1 flex-row space-x-4 justify-center items-center" >
                        <div className="text-xl">4.5</div> 
                        <AiFillStar className="fas fa-star text-yellow-400 "/>
                      </div>
                    </div>
                    <div>
                      <p className="flex px-6  text-sm leading-8">““I like it because I like to travel far and still can make my day better just by drinking their Hazelnut Latte</p>        
                    </div>
                  </div>
    
                
                  <div className="boxcomment border-yellow-900 border-2 rounded-xl flex flex-col pt-6 pl-4 space-y-4">
                    <div className="flex flex-row justify-between items-center">
                      <div className=" flex justify-center items-center">
                        <img src={profile3} alt=""/>
                      </div>
                      <div className="username flex flex-col justify-center pl-4">
                        <div className="font-bold text-xl">Kim Young Jou</div>
                        <div>Seoul, South Korea</div>
                      </div>
                      <div className="flex flex-1 flex-row space-x-4 justify-center items-center" >
                        <div className="text-xl">4.5</div> 
                        <AiFillStar className="fas fa-star text-yellow-400 "/>
                      </div>
                    </div>
                    <div>
                      <p className="flex px-6 text-sm leading-8 w-full">““This is very unusual for my taste, I haven’t liked coffee before but their coffee is the best! and yup, you have to order the chicken wings, the best in town!</p>        
                    </div>
                  </div>

                  <div className="boxcomment border-yellow-900 border-2 rounded-xl flex flex-col pt-6 pl-4 space-y-4 ">
                    <div className="flex flex-row justify-between items-center">
                      <div className=" flex justify-center items-center">
                        <img src={profile1} alt=""/>
                      </div>
                      <div className="username flex flex-col justify-center pl-4">
                        <div className="font-bold text-xl">Viezh Robert</div>
                        <div>Warsaw, Poland</div>
                      </div>
                      <div className="flex flex-1 flex-row space-x-4 justify-center items-center" >
                        <div className="text-xl">4.5</div> 
                        <AiFillStar className="fas fa-star text-yellow-400 "/>
                      </div>
                    </div>
                    <div>
                      <p className="flex px-6 text-sm leading-8 w-full">“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!</p>        
                    </div>
                  </div>
                
                  <div className="boxcomment border-yellow-900 border-2 rounded-xl flex flex-col pt-6 pl-4 space-y-4 ">
                    <div className="flex flex-row justify-between items-center">
                      <div className=" flex justify-center items-center">
                        <img src={profile1} alt=""/>
                      </div>
                      <div className="username flex flex-col justify-center pl-4">
                        <div className="font-bold text-xl">Viezh Robert</div>
                        <div>Warsaw, Poland</div>
                      </div>
                      <div className="flex flex-1 flex-row space-x-4 justify-center items-center" >
                        <div className="text-xl">4.5</div> 
                        <AiFillStar className="fas fa-star text-yellow-400 "/>
                      </div>
                    </div>
                    <div>
                      <p className="flex px-6 text-sm py-6 leading-8 w-full">“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!</p>        
                    </div>
                  </div>
                </div>
              </div>    
            </div>
    
            <div className="flex justify-between mt-20 w-full h-40 bg-white flex justify-center items-center relative bottom-28">
              <div className=" mt-5">
                <ul className="flex">
                  <li className="ml-28 mr-5"><button className=""><i className="fas fa-circle hover:text-yellow-800"></i></button></li>
                  <li className="mr-5"><button className=""><i className="fas fa-circle hover:text-yellow-800"></i></button></li>
                  <li className="mr-5"><button className=""><i className="fas fa-circle hover:text-yellow-800"></i></button></li>
                  <li className="mr-5"><button className=""><i className="fas fa-circle hover:text-yellow-800"></i></button></li>
                </ul>
              </div>
              <div className="">
                <ul className="flex flex-row">
                  <li className="ml-7"><button><BiLeftArrowCircle className="text-5xl text-yellow-800 bg-grey-800  rounded-full"/></button></li>
                  <li className="mr-20 ml-7"><button><BiRightArrowCircle className="text-5xl text-yellow-800 bg-grey-800 rounded-full"/></button></li>
                </ul>
              </div>
            </div>
          </section>

        )
    }
}

export default BoxComment