// import React from "react";
// import { Link } from "Link";
// import {FaPencilAlt} from "react-icons/fa"

// class BoxProfile extends React.Component{
//   render(){
//     return(  
//     <div class="banner">
//     <div class="banner flex flex-col items-center px-20">
//         <div class="user mt-20">
//             <h2 class="text-white font-medium text-4xl">User Profile</h2>
//         </div>
   
//         <div class="rowbox1 flex flex-row mt-16">
//             <div class="boxpict mr-10 flex flex-col justify-center py-10 items-center bg-white rounded-xl">
//                 <div class="userName flex flex-col flex-1 text-center">
//                     <figure class="h-40">
//                             <img class="w-36 h-36 rounded-full" src="/asset/img/zulaikha.png" alt=""/>
//                             <button class="flex justify-center items-center text-center bg-yellow-900 w-10 h-10 rounded-full relative -top-10 left-24"><FaPencilAlt /></button>
//                     </figure>
//                     <div class="text-center">
//                         <h2 class="text-xl font-bold">Zulaikha</h2>
//                         <p class="text-xs text-gray-500">zulaikha17@gmail.com</p>
//                     </div>
                    
//                 </div>
//                 <div>
//                     <h2 class="text-gray-500">Has been ordered 15 products</h2>
//                 </div>
//             </div>

//             <div class="boxcontact bg-white flex flex-col rounded-xl border-yellow-900 items-center space-y-4">
//                 <div class="title flex flex-row justify-between mt-6 mx-6">
//                     <div class="text-3xl font-bold text-gray-500">Contact</div>
//                     <button class="flex justify-center items-center text-center bg-yellow-900 w-10 h-10 rounded-full relative -top-10 left-24"><FaPencilAlt /></button>
//                 </div>
//                 <div class="info flex flex-row flex-wrap text-lg">
//                         <div class="col1 flex flex-col space-y-12">
//                             <div class="flex flex-col space-y-2">
//                                 <div class="text-gray-400">Email Adress</div>
//                                 <input class=" border-b-2 border-black text-black text-xl" type="text" name="" id="" placeholder="zulaikha@gmail.com"/>
//                             </div>
//                             <div class="flex flex-col space-y-2">
//                                 <div class="text-gray-400">Delivery Adress</div>
//                                 <input class=" border-b-2 border-black text-black text-lg" type="text" name="" id="" placeholder="Iskandar Street no. 67 Block A Near Bus Stop"/>
//                             </div>
//                         </div>
//                         <div class="col2 flex flex-col space-y-2">
//                             <div class="text-gray-400">Mobilole Number</div>
//                             <input class=" border-b-2 border-black text-black leading-5 text-lg" type="text" name="" id="" placeholder="(+62)813456782"/>
//                         </div>
//                 </div>
//             </div>
//         </div>
        
//     <div class="rowbox2 mt-14 ">
//         <div class="edit flex flex-row">      
//         <div class="boxcontact edit bg-white flex flex-col rounded-xl border-yellow-900 items-center mr-12 space-y-4">
//             <div class="title flex flex-row justify-between mt-6">
//                 <div class="text-3xl font-bold text-gray-500">Details</div>
//                 <button class="flex justify-center items-center text-center bg-yellow-900 w-10 h-10 rounded-full relative -top-10 left-24"><FaPencilAlt /></button>
//             </div>
//             <div class="info flex flex-row flex-wrap text-lg">
//                     <div class="col1 flex flex-col space-y-9">
//                         <div class="flex flex-col space-y-2">
//                             <div class="text-gray-400">Display name :</div>
//                             <div class=" border-b-2 border-black">Zulaikha</div>
//                         </div>
//                         <div class="flex flex-col space-y-2">
//                             <div class="text-gray-400">First name :</div>
//                             <div class=" border-b-2 border-black leading-5">Zulaikha</div>
//                         </div>
//                         <div class="flex flex-col space-y-2">
//                             <div class="text-gray-400">Last name :</div>
//                             <div class=" border-b-2 border-black leading-5">Zulaikha</div>
//                         </div>
//                     </div>
//                     <div class="col2 flex flex-col space-y-9">
//                         <div class="flex flex-col space-y-2">
//                             <div class="text-gray-400">DD/MM/YY</div>
//                             <div class=" border-b-2 border-black">03/04/90</div>
//                         </div>
//                         <div class=" flex flex-col space-y-2">
//                             <div>
//                                 <input type="radio" name="gender" id="male"/>
//                                 <label class="text-gray-400" for="male">Male</label>
//                             </div>
//                             <div>
//                                 <input class="" type="radio" name="gender" id="female"/>
//                                 <label class="text-gray-400" for="female">Female</label>
//                             </div>
//                         </div>
//                     </div>
//             </div>
//         </div>

//         <div class="confirmation pt-3 items-center text-center space-y-6">
//             <div>
//                 <h2 class="text-white text-2xl font-bold">Do you want to save the change?</h2>
//             </div>
//             <div class="space-y-4">
//                 <div class=" bg-yellow-900 text-xl h-16 flex justify-center items-center rounded-2xl text-white font-bold"><button>Save change</button></div>
//                 <div class=" bg-yellow-500 text-xl h-16 flex justify-center items-center rounded-2xl text-yellow-900 font-bold"><button>Cancel</button></div>
//             </div>
//             <div class="space-y-4">
//                 <div class="bg-white text-xl h-16 flex justify-center items-center rounded-2xl text-yellow-900">
//                     <button class="flex justify-between items-center w-full px-6 font-bold">
//                         <span>Edit password</span>
//                         <span>></span>
//                     </button>
//                 </div>
//                 <div class="bg-white text-xl h-16 flex justify-center items-center rounded-2xl text-yellow-900">
//                     <button class="flex justify-between items-center w-full px-6 font-bold">
//                         <span>Log out</span>
//                         <span>></span>
//                     </button>
//                 </div>
//             </div>
//         </div>
//         </div>
//   </div>
// </div>
//     );
//   }
// }

// export default BoxProfile