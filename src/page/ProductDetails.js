import React from 'react';
import {connect} from 'react-redux'
import { getDetails } from '../redux/actions/products';
import { addProducts } from '../redux/actions/carts';


class ProductDetails extends React.Component { 
  state = {
    counter : 1,
}
    componentDidMount(){
      this.props.getDetails(this.props.match.params.id)
    }
    SumCount = () =>{
      const {quantity} = this.props.products.details.item
        if(this.state.counter >= quantity){
          window.alert(`quantity of this products just ${quantity}`)
        }else{
          this.setState({
            counter: this.state.counter + 1
          })
        console.log(this.state.counter)
      }
    }

    MinCount = () =>{
      if(this.state.counter <= 1){
          window.alert("can't orders product less than 1 ")
      }else{
        this.setState({
          counter: this.state.counter - 1
        })
      }
    }

    render() {
      const {item} = this.props.products.details
      const {order} = this.props.products
      order.amount =+ this.state.counter
      // const SumCount = () =>{
      //   if(`${order?.amount}` >= `${item?.quantity}`){
      //     window.alert(`quantity of this products just ${item?.quantity}`)
      //   }else{
      //       const count = `${order?.amount + 1}`
      //   }
      // }
      // const MinCount = () =>{
      //     if(`${order?.amount}` <= 1){
      //         window.alert("can't orders product less than 1 ")
      //     }else{
      //       const count = `${order?.amount}` - 1
      //     }
      //   }
      
        return (
          <>
            <section className="parentBox flex flex-row bg-gray-200 ">
    
              <div className="boxLeft flex justify-center">

                <div className="cardLeft flex flex-col items-center text-center space-y-20 py-10">
                  <div className="productName flex flex-row space-x-1">
                    <div>Favorite & Promo</div>
                    <div className=" text-yellow-900 font-bold">{item?.name}</div>
                  </div>
                  <div className="pictPrice uppercase space-y-6 flex flex-col justify-center items-center">
                    <div><img className="w-80 h-80 rounded-full" src={item?.img_link} alt=""/></div>
                    <div className=" space-y-4" >
                      <div className="text-5xl font-extrabold">{item?.name}</div>
                      <div className=" text-2xl font-medium">IDR. {item?.price}</div>
                    </div>
                  </div>
                  <div className=" space-y-4">
                    <div><button className="font-medium w-72 h-14 bg-yellow-900 text-white flex justify-center items-center rounded-xl" onClick={()=>this.props.addProducts(item, order)} >Add to Cart</button></div>
                    <div><button className="font-bold w-72 h-14 bg-yellow-400 text-yellow-900 flex justify-center items-center rounded-xl">Ask a Staff</button></div>
                  </div>
                </div>


              </div>


              <div className="boxRight flex flex-col justify-self-center">
                <div className="boxDetail bg-white rounded-xl mt-14 flex-col justify-center items-center px-16 py-16">
                  <div className="flex-col justify-center items-center space-y-14">
                    <div className=" text-yellow-900 pr-36 text-2xl">Delivery only on <span className="font-bold">Monday to friday</span> at  <span className="font-bold">1 - 7 pm</span></div>
                    <div className="">
                      <p className="leading-8 text-2xl text-yellow-900">{item?.description}</p>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-8">
                      <div className="font-bold text-2xl ">Choose a size</div>
                      <div className=" uppercase flex flex-row space-x-16">
                        <div className="flex justify-center items-center bg-yellow-400 w-14 h-14 rounded-full">r</div>
                        <div className="flex justify-center items-center bg-yellow-400 w-14 h-14 rounded-full">l</div>
                        <div className="flex justify-center items-center bg-yellow-400 w-14 h-14 rounded-full">xl</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="boxDelivery space-y-8 flex flex-col mt-6">
                  <div className="flex justify-center items-center">
                    <h2 className="font-bold text-xl">Choose Delivery Methods</h2>
                  </div>
                  <div className="flex flex-row justify-center space-x-12">
                    <div className=" bg-yellow-900 w-24 h-10 rounded-lg flex justify-center items-center"><button className="text-white text-sm">Dine in</button></div>
                    <div className=" bg-white border-2 w-28 h-10 rounded-lg flex justify-center items-center"><button className="text-sm">Door Delivery</button></div>
                    <div className=" bg-white border-2 w-24 h-10 rounded-lg flex justify-center items-center"><button className=" text-sm">Pick up</button></div>
                  </div>
                  <div className="flex flex-row">
                    <label className=" ml-32" for="">Set time :</label>
                    <input className=" border-b-2 border-black ml-4 bg-gray-200 pl-3 text-sm w-80" type="text" placeholder="Enter the time you’ll arrived"/>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="boxOrder flex flex-row bg-gray-200 justify-between items-center px-48">
                <div className="totalOrder bg-white shadow-2xl rounded-2xl flex flex-row relative top-10 mr-12">
                  <div className="flex justify-center items-center pl-12"><img className="w-24 h-24 rounded-full" src={item?.img_link}alt=""/></div>
                  <div className="flex flex-col justify-center items-start pl-8 w-60 space-y-2">
                    <div className=" uppercase font-extrabold text-2xl">{item?.name}</div>
                    <div className="font-medium">
                      <span>{order?.amount}</span>
                      <span>(Large)</span>
                    </div>
                    <div className="font-medium">
                      <span>{order?.amount}</span>
                      <span>(Regular)</span>
                    </div>
                  </div>
                  <div className="flex justify-center items-center font-extrabold text-2xl flex-1 space-x-12">
                    <button onClick= {this.MinCount} className="flex justify-center items-center text-center w-14 h-14 rounded-full bg-yellow-200">-</button>
                    <div>{order?.amount}</div>
                    <button onClick= {this.SumCount} className="flex justify-center items-center text-center w-14 h-14 rounded-full bg-yellow-200">+</button>
                  </div>
                </div>
                <button className="checkout bg-yellow-400 rounded-xl relative top-10  shadow-xl">
                  <div className=" uppercase font-bold text-3xl">checkout</div>
                </button>
              </div>
            </section>
                
          </>
        );
    }
}

const mapStateToProps = state => ({
  products: state.products
})

const mapDispatchToProps = {getDetails, addProducts}

export default connect(mapStateToProps, mapDispatchToProps)( ProductDetails)