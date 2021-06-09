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
        <div class="boxOrder flex flex-row bg-gray-200 justify-between items-center px-48">
            <div class="totalOrder bg-white shadow-2xl rounded-2xl flex flex-row relative top-10 mr-12">
                <div class="flex justify-center items-center pl-12"><img class="w-24 h-24 rounded-full" src={ColdBrew} alt=""/></div>
                <div class="flex flex-col justify-center items-start pl-8 w-60 space-y-2">
                    <div class=" uppercase font-extrabold text-2xl">Cold brew</div>
                    <div class="font-medium">
                        <span>x1</span>
                        <span>(Large)</span>
                    </div>
                    <div class="font-medium">
                        <span>x1</span>
                        <span>(Regular)</span>
                    </div>
                </div>
                <div class="flex justify-center items-center font-extrabold text-2xl flex-1 space-x-12">
                    <button onClick= {this.MinCount} class="flex justify-center items-center text-center w-14 h-14 rounded-full bg-yellow-200">-</button>
                    <div>{this.state.counter}</div>
                    <button onClick= {this.SumCount} class="flex justify-center items-center text-center w-14 h-14 rounded-full bg-yellow-200">+</button>
                </div>
            </div>
            <button class="checkout bg-yellow-400 rounded-xl relative top-10  shadow-xl">
               <div class=" uppercase font-bold text-3xl">checkout</div>
            </button>
        </div>
    </section>
        )
    }
}
export default BoxQuantity