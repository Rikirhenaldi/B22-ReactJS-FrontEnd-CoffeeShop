import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import {connect} from 'react-redux'
import { getHistoryDetails } from '../redux/actions/history';


const HistoryDetails = (props) => {
  const {id} = useParams()
  const {token} = props.auth
  const {details} = props.history
  useEffect( async () => {
    try{
      const data = await props.getHistoryDetails(id, token)
      console.log(data);
    }catch(e){
      console.error(e);
    }
  }, [id])
     return(
       <div>
         <div className="bannerhistory dua pt-28 space-y-9 ">
           <div className="flex flex-col justify-center items-center text-white text-3xl tracking-wide space-y-4">
             <div className="font-bold  text-4xl">Let’s see details products that you have bought!</div>
             <div className="text-lg">Select item to delete</div>
           </div>
           <div className="flex flex-col justify-center items-end text-white mr-40">
             <div><Link to="" className="underline" >Select ALL</Link></div>
           </div>
           <div className="repeatbox mt-2 box-contain">
             <div className="grid lg:grid-cols-3 gap-10 mx-20 ">
               {details !== null ? details.map((data)=>{
                   return(
                     <div className="itemlist flex items-center px-4 space-x-4 " key={data.id_transaction}>
                       <div>
                         <img className="w-20 h-20 rounded-full" src={data.img} alt=""/>
                       </div>
                       <div>
                         <div className="text-xl font-bold w-56">{data.name_product}</div>
                         <div>Price: IDR.{data.price_product.toLocaleString("en")}</div>
                         <div className="flex flex-row justify-between items-center">
                           <label htmlFor="Delivered">amount: {data.amount}</label>
                           <input type="checkbox" name="History" id="Delivered"/>
                         </div>
                       </div>
                     </div>
                    )
                  }): null}
             </div>

           </div>
         </div>
       </div>
     )
}
const mapStateToProps = state => ({
  history: state.history,
  auth: state.auth
})
const mapDispatchToProps = {getHistoryDetails}
export default connect(mapStateToProps, mapDispatchToProps)(HistoryDetails)