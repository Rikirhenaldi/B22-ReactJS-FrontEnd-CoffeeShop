import React from 'react'
import '../index.css'
import '../App.css'
import { Link } from 'react-router-dom'
import imghistory from '../asset/img/m1.png'

class HistoryCust extends React.Component{
    render(){
        return(
          <div className="bannerhistory pt-28 space-y-9">
            <div className="flex flex-col justify-center items-center text-white text-3xl tracking-wide space-y-4">
              <div className="font-bold  text-4xl">Let’s see what you have bought!</div>
              <div className="text-lg">Select item to delete</div>
            </div>
            <div className="flex flex-col justify-center items-end text-white mr-40">
              <div><Link to="/DeleteHistory" className="underline" >Select ALL</Link></div>
            </div>
            <div className="repeatbox mt-2 ">
              <div className="grid lg:grid-cols-3 gap-10 mx-20">
                <div className="itemlist flex items-center px-4 space-x-4">
                  <div>
                    <img className="w-20 h-20 rounded-full" src={imghistory} alt=""/>
                  </div>
                  <div>
                    <div className="text-xl font-bold">Veggie tomato mix</div>
                    <div>IDR 34.000</div>
                    <div className="flex flex-row justify-between items-center">
                      <label for="Delivered">Delivered</label>
                      <input type="checkbox" name="History" id="Delivered"/>
                    </div>
                  </div>
                </div>
                <div className="itemlist flex items-center px-4 space-x-4">
                  <div>
                    <img className="w-20 h-20 rounded-full" src={imghistory} alt=""/>
                  </div>
                  <div>
                    <div className="text-xl font-bold">Veggie tomato mix</div>
                    <div>IDR 34.000</div>
                    <div className="flex flex-row justify-between items-center">
                      <label for="Delivered">Delivered</label>
                      <input type="checkbox" name="History" id="Delivered"/>
                    </div>
                  </div>
                </div>
                <div className="itemlist flex items-center px-4 space-x-4">
                  <div>
                    <img className="w-20 h-20 rounded-full" src={imghistory} alt=""/>
                  </div>
                  <div>
                    <div className="text-xl font-bold">Veggie tomato mix</div>
                    <div>IDR 34.000</div>
                    <div className="flex flex-row justify-between items-center">
                      <label for="Delivered">Delivered</label>
                      <input type="checkbox" name="History" id="Delivered"/>
                    </div>
                  </div>
                </div>

                <div className="itemlist flex items-center px-4 space-x-4">
                  <div>
                    <img className="w-20 h-20 rounded-full" src={imghistory} alt=""/>
                  </div>
                  <div>
                    <div className="text-xl font-bold">Veggie tomato mix</div>
                    <div>IDR 34.000</div>
                    <div className="flex flex-row justify-between items-center">
                      <label for="Delivered">Delivered</label>
                      <input type="checkbox" name="History" id="Delivered"/>
                    </div>
                  </div>
                </div>
                <div className="itemlist flex items-center px-4 space-x-4">
                  <div>
                    <img className="w-20 h-20 rounded-full" src={imghistory} alt=""/>
                  </div>
                  <div>
                    <div className="text-xl font-bold">Veggie tomato mix</div>
                    <div>IDR 34.000</div>
                    <div className="flex flex-row justify-between items-center">
                      <label for="Delivered">Delivered</label>
                      <input type="checkbox" name="History" id="Delivered"/>
                    </div>
                  </div>
                </div>
                <div className="itemlist flex items-center px-4 space-x-4">
                  <div>
                    <img className="w-20 h-20 rounded-full" src={imghistory} alt=""/>
                  </div>
                  <div>
                    <div className="text-xl font-bold">Veggie tomato mix</div>
                    <div>IDR 34.000</div>
                    <div className="flex flex-row justify-between items-center">
                      <label for="Delivered">Delivered</label>
                      <input type="checkbox" name="History" id="Delivered"/>
                    </div>
                  </div>
                </div>

                <div className="itemlist flex items-center px-4 space-x-4">
                  <div>
                    <img className="w-20 h-20 rounded-full" src={imghistory} alt=""/>
                  </div>
                  <div>
                    <div className="text-xl font-bold">Veggie tomato mix</div>
                    <div>IDR 34.000</div>
                    <div className="flex flex-row justify-between items-center">
                      <label for="Delivered">Delivered</label>
                      <input type="checkbox" name="History" id="Delivered"/>
                    </div>
                  </div>
                </div>
                <div className="itemlist flex items-center px-4 space-x-4">
                  <div>
                    <img className="w-20 h-20 rounded-full" src={imghistory} alt=""/>
                  </div>
                  <div>
                    <div className="text-xl font-bold">Veggie tomato mix</div>
                    <div>IDR 34.000</div>
                    <div className="flex flex-row justify-between items-center">
                      <label for="Delivered">Delivered</label>
                      <input type="checkbox" name="History" id="Delivered"/>
                    </div>
                  </div>
                </div>
                <div className="itemlist flex items-center px-4 space-x-4">
                  <div>
                    <img className="w-20 h-20 rounded-full" src={imghistory} alt=""/>
                  </div>
                  <div>
                    <div className="text-xl font-bold">Veggie tomato mix</div>
                    <div>IDR 34.000</div>
                    <div className="flex flex-row justify-between items-center">
                      <label for="Delivered">Delivered</label>
                      <input type="checkbox" name="History" id="Delivered"/>
                    </div>
                  </div>
                </div>

                <div className="itemlist flex items-center px-4 space-x-4">
                  <div>
                    <img className="w-20 h-20 rounded-full" src={imghistory} alt=""/>
                  </div>
                  <div>
                    <div className="text-xl font-bold">Veggie tomato mix</div>
                    <div>IDR 34.000</div>
                    <div className="flex flex-row justify-between items-center">
                      <label for="Delivered">Delivered</label>
                      <input type="checkbox" name="History" id="Delivered"/>
                    </div>
                  </div>
                </div>
                <div className="itemlist flex items-center px-4 space-x-4">
                  <div>
                    <img className="w-20 h-20 rounded-full" src={imghistory} alt=""/>
                  </div>
                  <div>
                    <div className="text-xl font-bold">Veggie tomato mix</div>
                    <div>IDR 34.000</div>
                    <div className="flex flex-row justify-between items-center">
                      <label for="Delivered">Delivered</label>
                      <input type="checkbox" name="History" id="Delivered"/>
                    </div>
                  </div>
                </div>
                <div className="itemlist flex items-center px-4 space-x-4">
                  <div>
                    <img className="w-20 h-20 rounded-full" src={imghistory} alt=""/>
                  </div>
                  <div>
                    <div className="text-xl font-bold">Veggie tomato mix</div>
                    <div>IDR 34.000</div>
                    <div className="flex flex-row justify-between items-center">
                      <label for="Delivered">Delivered</label>
                      <input type="checkbox" name="History" id="Delivered"/>
                    </div>
                  </div>
                </div>

                <div className="itemlist flex items-center px-4 space-x-4">
                  <div>
                    <img className="w-20 h-20 rounded-full" src={imghistory} alt=""/>
                  </div>
                  <div>
                    <div className="text-xl font-bold">Veggie tomato mix</div>
                    <div>IDR 34.000</div>
                    <div className="flex flex-row justify-between items-center">
                      <label for="Delivered">Delivered</label>
                      <input type="checkbox" name="History" id="Delivered"/>
                    </div>
                  </div>
                </div>
                <div className="itemlist flex items-center px-4 space-x-4">
                  <div>
                    <img className="w-20 h-20 rounded-full" src={imghistory} alt=""/>
                  </div>
                  <div>
                    <div className="text-xl font-bold">Veggie tomato mix</div>
                    <div>IDR 34.000</div>
                    <div className="flex flex-row justify-between items-center">
                      <label for="Delivered">Delivered</label>
                      <input type="checkbox" name="History" id="Delivered"/>
                    </div>
                  </div>
                </div>
                <div className="itemlist flex items-center px-4 space-x-4">
                  <div>
                    <img className="w-20 h-20 rounded-full" src={imghistory} alt=""/>
                  </div>
                  <div>
                    <div className="text-xl font-bold">Veggie tomato mix</div>
                    <div>IDR 34.000</div>
                    <div className="flex flex-row justify-between items-center">
                      <label for="Delivered">Delivered</label>
                      <input type="checkbox" name="History" id="Delivered"/>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )
    }
}

export default HistoryCust