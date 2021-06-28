import React from 'react';
import { Link } from 'react-router-dom'
import barcode from '../asset/img/barcode.png'
import {connect} from 'react-redux'
import { getHistoryProducts } from '../redux/actions/history';

class History extends React.Component {
    // state = {}
    componentDidMount(){
      const {token} = this.props.auth
      this.props.getHistoryProducts(token)
    }
    render() {  
      const {products} = this.props.history
      console.log(products);
        return (
          <div>
            <div className="bannerhistory pt-28 space-y-9">
              <div className="flex flex-col justify-center items-center text-white text-3xl tracking-wide space-y-4">
                <div className="font-bold  text-4xl">Let’s see what you have ordered!</div>
                <div className="text-lg">Select item to delete</div>
              </div>
              <div className="flex flex-col justify-center items-end text-white mr-40">
                <div><Link to="" className="underline" >Select ALL</Link></div>
              </div>
              <div className="repeatbox mt-2 ">
                <div className="grid lg:grid-cols-3 gap-10 mx-20">

                  {products.map((data)=>{
                return(
                  <div className="itemlist flex items-center px-4 space-x-4 " key={data.id_payment} >
                    <div>
                      <img className="w-20 h-20 rounded-full" src={barcode} alt=""/>
                    </div>
                    <div>
                      <div className="text-xl font-bold">{data.code}</div>
                      <div>Price: IDR.{data.total.toLocaleString("en")}</div>
                      <div className="flex flex-row justify-between items-center">
                        <label htmlFor="Delivered">Delivered</label>
                        <input type="checkbox" name="History" id="Delivered"/>
                      </div>
                    </div>
                    <div>
                      <Link to={`/DetailHistory/${data.id_payment}`}> 
                        <button className="relative left-2 py3 font-medium text-sm w-14 h-8 bg-yellow-500 text-white flex justify-center items-center rounded-md">Details</button> 
                      </Link>
                    </div>
                  </div>
                  
                )
            })}
                </div>

              </div>
            </div>
                
          </div>
        );
    }
}
const mapStateToProps = state => ({
  history: state.history,
  auth: state.auth
})
const mapDispatchToProps = {getHistoryProducts}
export default connect(mapStateToProps, mapDispatchToProps)(History)