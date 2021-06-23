import React from 'react'
import '../index.css'
import '../App.css'
import ColdBrew from "../asset/img/ColdBrew.png";

class BoxQuantity extends React.Component{
      state = {
        counter : 0,
    }
    SumCount = () =>{
      if(this.state.counter >= 10){
        window.alert("can't increase number more than 10")
      }else{
        this.setState({
            counter: this.state.counter + 1
          })
      }
    }
    MinCount = () =>{
        if(this.state.counter <= 0){
            window.alert("can't decrease number less than 0")
        }else{
            this.setState({
                counter: this.state.counter - 1
              })
        }
      }
    render(){
        return(
      <section>
        <div className="boxOrder flex flex-row bg-gray-200 justify-between items-center px-48">
            <div className="totalOrder bg-white shadow-2xl rounded-2xl flex flex-row relative top-10 mr-12">
                <div className="flex justify-center items-center pl-12"><img className="w-24 h-24 rounded-full" src={ColdBrew} alt=""/></div>
                <div className="flex flex-col justify-center items-start pl-8 w-60 space-y-2">
                    <div className=" uppercase font-extrabold text-2xl">Cold brew</div>
                    <div className="font-medium">
                        <span>x1</span>
                        <span>(Large)</span>
                    </div>
                    <div className="font-medium">
                        <span>x1</span>
                        <span>(Regular)</span>
                    </div>
                </div>
                <div className="flex justify-center items-center font-extrabold text-2xl flex-1 space-x-12">
                    <button onClick= {this.MinCount} className="flex justify-center items-center text-center w-14 h-14 rounded-full bg-yellow-200">-</button>
                    <div>{this.state.counter}</div>
                    <button onClick= {this.SumCount} className="flex justify-center items-center text-center w-14 h-14 rounded-full bg-yellow-200">+</button>
                </div>
            </div>
            <button className="checkout bg-yellow-400 rounded-xl relative top-10  shadow-xl">
               <div className=" uppercase font-bold text-3xl">checkout</div>
            </button>
        </div>
    </section>
        )
    }
}
export default BoxQuantity