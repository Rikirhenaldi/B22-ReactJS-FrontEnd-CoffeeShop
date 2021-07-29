import React from 'react';
import {Link} from 'react-router-dom'
import "../App.css"
import {BiCreditCard} from 'react-icons/bi'
import {RiBankFill} from 'react-icons/ri'
import {FaTruck} from 'react-icons/fa'
import {connect} from 'react-redux'
import { postPayment, postPayment2 } from '../redux/actions/payment';
import { getProfile } from '../redux/actions/profile'

class YourChart extends React.Component {
    state = {
      address: "",
      phoneNumber: "",
    }
    componentDidMount(){
      const {token} = this.props.auth
      this.props.getProfile(token)
    }
    onPayment = (e) =>{
      e.preventDefault()
      const {products} = this.props.carts
      const {token} = this.props.auth
      const data = products
      const auth = token
        this.props.postPayment(data, auth)
    }

    render() {
      const {products} = this.props.carts
      const {errMseg} = this.props.payment
      const {sccMseg} = this.props.payment
      const {data} = this.props.profile
      console.log(products)
        return (
          <div>
            <div className="bannerpayment flex flex-col">
              <div className="title ml-80 mt-16">
                <h2 className="checkout text-4xl font-bold text-white w-80 tracking-wider">Checkout your item now!</h2>
              </div>
   
              <div className="boxmiddle flex flex-row justify-center">
        
                <div className="boxleft flex flex-col justify-center items-center space-y-10 my-20">
                  <div className="flex justify-center items-center mt-16">
                    <h2 className="text-3xl font-bold">Order Summary</h2>
                  </div>
            
                  {products.map((data)=>{
                  return(
                    <div className="boxpesanan space-y-6" key={data.id}>
                      <div className="flex flex-row items-center justify-between w-80">
                        <div className="w-20 h-28"><img className="w-full h-full rounded-xl" src={data.data.img_link} alt=""/></div>
                        <div className="w-28 h-24">
                          <div>{data.data.name}</div>
                          <div>x {data.order.amount}</div>
                          <div>Regular</div>
                        </div>
                        <div>
                          <h3 className="">IDR.{data.data.price}</h3>
                        </div>
                      </div>
                    </div>
                  )
                })}
                  <div className="total flex flex-col justify-center items-center space-y-2">
                    <div className="flex flex-row w-80 justify-between text-lg">
                      <div>SUBTOTAL</div>
                      <div>IDR 120.000</div>
                    </div>
                    <div className="flex flex-row w-80 justify-between">
                      <div>TAX & FEES</div>
                      <div>IDR 20.000</div>
                    </div>
                    <div className="flex flex-row w-80 justify-between">
                      <div>SHIPPING</div>
                      <div>IDR 10.000</div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between items-center w-80">
                    <div className=" font-bold text-2xl text-yellow-900">TOTAL</div>
                    <div className=" font-bold text-2xl text-yellow-900">IDR 150.000</div>
                  </div>
                  <div>

                  </div>
            
                </div>
        
                <div className="boxright flex flex-col justify-center items-center ml-20">
                  <div className="adress flex flex-col">
                    <div className="flex flex-row justify-between items-center mb-3 px-2">
                      <div className="text-xl text-white font-medium">Address details</div>
                      <div className="text-white"><Link to="">edit</Link></div>
                    </div>
                    {data.user !== undefined ? data?.user.map((user)=>{
                      return(
                      <div className="boxadress flex flex-col px-8 pt-6 space-y-4" key={user.id}>
                      <div className="border-b-2 h-20"><span className="font-bold">Delivery</span> to {user.address}  </div>
                      {/* <div className="border-b-2 h-12"></div> */}
                      <div>{user.phoneNumber}</div>
                      </div>
                      )
                    }) : null}
                    
                  </div>
                  <div className="paymethod mt-16">
                    <div className="flex flex-row justify-between items-center mb-3 px-2">
                      <div className="text-xl text-white font-medium">Payment Method</div>
                    </div>
                    <div className="boxpaymethod flex flex-col px-8 pt-6">
                      <ul className="space-y-2">
                        <li className="flex flex-row h-10 border-b-2 items-center w-full">
                          <input className="mr-2" type="radio" name="payment" id="card"/>
                          <div className="bg-red-400 w-10 h-8 flex justify-center items-center mr-2 rounded-lg" htmlFor="card" ><BiCreditCard color="white" size="22"/></div>
                          <div>Card</div>
                        </li>
                        <li className="flex flex-row h-10 border-b-2 items-center w-full">
                          <input className="mr-2" type="radio" name="payment" id="Bank"/>
                          <div className="bg-yellow-900 w-10 h-8 flex justify-center items-center mr-2 rounded-lg" htmlFor="Bank"><RiBankFill color="white" size="22"/></div>
                          <div>Bank Account</div>
                        </li>
                        <li className="flex flex-row h-10 items-center w-full">
                          <input className=" mr-2" type="radio" name="payment" id="cod"/>
                          <div className="bg-yellow-400 w-10 h-8 flex justify-center items-center mr-2 rounded-lg mr-2" htmlFor="cod"><FaTruck color="white" size="22"/></div>
                          <div>Cash on Delivery</div>
                        </li>

                      </ul>
                    </div>
                  </div>
                    {errMseg!=="" && <div className="bg-red-300 text-red-900 font-bold px-5 py-5 rounded-md text-center">{errMseg}</div>}
                      {sccMseg!=="" && <div className="bg-green-300 text-green-900 font-bold px-5 py-5 rounded-md text-center">{sccMseg}</div>}
                  <button className="confirmpay bg-yellow-900 flex justify-center items-center mt-16" onClick={this.onPayment}>
                    <div className="text-white font-bold">Confirm and Pay</div>
                  </button>
                </div>
              </div>
            </div>       
          </div>
        );
    }
}
const mapStateToProps = state => ({
  carts: state.carts,
  payment: state.payment,
  auth: state.auth,
  profile: state.profile
})

const mapDispatchToProps = {postPayment, postPayment2, getProfile}
export default connect(mapStateToProps, mapDispatchToProps)(YourChart)