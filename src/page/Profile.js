import React from 'react';
import '../App.css'
import {connect} from 'react-redux'
import { getProfile } from '../redux/actions/profile';
import { getHistoryProducts } from '../redux/actions/history';
import {FaPencilAlt} from 'react-icons/fa'
import { putProfile } from '../redux/actions/profile';
class Profile extends React.Component {
    state = {
      isDisabled: true,
      email: "",
      img: null,
      name: "",
      phoneNumber: "",
      address: "",
    }
    componentDidMount(){
      const {token} = this.props.auth
      this.props.getProfile(token)
      this.props.getHistoryProducts(token)
    }
    handleSubmitClicked() {
      this.setState({
        isDisabled: false,
      });
    }
    onUpdateProfile =(e)=>{
      e.preventDefault()
      const {token} = this.props.auth
      const {email, img, name, phoneNumber,address} = this.state
      this.props.putProfile({email, img, name, phoneNumber, address}, token)
      location.reload()
    }
    // emailUpdate = (e) => {
    //   const  {user} = this.props.profile?.data
    //   if(e.target.value === ""){
    //     this.setState({email: user[0]?.email.target.value})  
    //   }else{
    //     this.setState({email: e.target.value})
    //   }
    // }
    render() {
      const  {user} = this.props.profile?.data
      const {products} = this.props.history
        return (
          <div className="banner">
            <div className="banner flex flex-col items-center px-20">
              <div className="user mt-20">
                <h2 className="text-white font-medium text-4xl">User Profile</h2>
              </div>
              {user?.map((user) =>{
                return(
                  <div className="rowbox1 flex flex-row mt-16" key={user.id}>
                    <form className="boxpict mr-10 flex flex-col justify-center py-10 items-center bg-white rounded-xl">
                      <div className="userName flex flex-col flex-1 text-center justify-center items-center">
                        <figure className="h-40">
                          <img className="w-36 h-36 rounded-full" src={user.img} alt=""/>
                          <div className="flex justify-center items-center text-center bg-yellow-900 w-10 h-10 rounded-full relative -top-10 left-24">
                            <button href=""><FaPencilAlt color="white"/></button>
                          </div>
                        </figure>   
                        <input className="text-sm text-center pl-24" type="file" disabled={this.state.isDisabled} onChange={e=>this.setState({img: e.target.files[0]})} />
                        <div className="text-center">
                          <h2 className="text-xl font-bold">{user.name}</h2>
                          <p className="text-xs text-gray-500">{user.email}</p>
                        </div>
                        
                      </div>
                      <div>
                        <h2 className="text-gray-500">Has been ordered {products.length} products</h2>
                      </div>
                    </form>
    
                    <div className="boxcontact bg-white flex flex-col rounded-xl border-yellow-900 items-center space-y-4">
                      <div className="title flex flex-row justify-between mt-6 mx-6">
                        <div className="text-3xl font-bold text-gray-500">Contact</div>
                        <button  className=" bg-yellow-900 w-10 h-10 flex justify-center items-center rounded-full" href="" 
                        onClick={this.handleSubmitClicked.bind(this)}><FaPencilAlt color="white" /></button></div>
                      <form className="info flex flex-row flex-wrap text-lg">
                        <div className="col1 flex flex-col space-y-12">
                          <div className="flex flex-col space-y-2">
                            <div className="text-gray-400">Email Adress</div>
                            <input className="placeholder-black border-b-2 border-black text-black text-lg"  type="text" name="" id="" placeholder={user.email} disabled={this.state.isDisabled}  onChange={e=>this.setState({email: e.target.value})}/>
                          </div>
                          <div className="flex flex-col space-y-2">
                            <div className="text-gray-400">Delivery Adress</div>
                            <textarea rows="3" className=" placeholder-black border-b-2 border-black text-black text-lg" type="text" name="" id="" placeholder={user.address} disabled={this.state.isDisabled} onChange={e=>this.setState({address: e.target.value})}/>
                          </div>
                        </div>
                        <div className="col2 flex flex-col space-y-2">
                          <div className="text-gray-400">Mobilole Number</div>
                          <input className="placeholder-black border-b-2 border-black text-black leading-5 text-lg" type="text" name="" id="" placeholder={user.phoneNumber} disabled={this.state.isDisabled} onChange={e=>this.setState({phoneNumber: e.target.value})} />
                        </div>
                      </form>
                    </div>
                  </div>
              )
              })}
              {user?.map((user) =>{
                return(
                  <div className="rowbox2 mt-14 " key={user.id}>
                    <div className="edit flex flex-row">      
                      <div className="boxcontact edit bg-white flex flex-col rounded-xl border-yellow-900 items-center mr-12 space-y-4">
                        <div className="title flex flex-row justify-between mt-6">
                          <div className="text-3xl font-bold text-gray-500">Details</div>
                          <div className=" bg-yellow-900 w-10 h-10 flex justify-center items-center rounded-full" ><button href=""><FaPencilAlt color="white" /></button></div>
                        </div>
                        <div className="info flex flex-row flex-wrap text-lg">
                          <div className="col1 flex flex-col space-y-9">
                            <div className="flex flex-col space-y-2">
                              <div className="text-gray-400">Display name :</div>
                              <input className="placeholder-black border-b-2 border-black text-black leading-5 text-lg" type="text" name="" id="" placeholder={user.name} disabled={this.state.isDisabled}  onChange={e=>this.setState({name: e.target.value})} />
                            </div>
                            <div className="flex flex-col space-y-2">
                              <div className="text-gray-400">First name :</div>
                              <input className="placeholder-black border-b-2 border-black text-black leading-5 text-lg" type="text" name="" id="" placeholder={user.name} onChange={e=>this.setState({name: e.target.value})} />
                            </div>
                            <div className="flex flex-col space-y-2">
                              <div className="text-gray-400">Last name :</div>
                              <input className="placeholder-black border-b-2 border-black text-black leading-5 text-lg" type="text" name="" id="" placeholder={user.name} disabled={this.state.isDisabled}/>
                            </div>
                          </div>
                          <div className="col2 flex flex-col space-y-9">
                            <div className="flex flex-col space-y-2">
                              <div className="text-gray-400">DD/MM/YY</div>
                              <input className="placeholder-black border-b-2 border-black text-black leading-5 text-lg" type="text" name="" id="" placeholder="03/04/05" disabled={this.state.isDisabled}/>
                            </div>
                            <div className=" flex flex-col space-y-2">
                              <div>
                                <input type="radio" name="gender" id="male"/>
                                <label className="text-gray-400 pl-5" htmlFor="male">Male</label>
                              </div>
                              <div>
                                <input className="" type="radio" name="gender" id="female"/>
                                <label className="text-gray-400 pl-5" htmlFor="female">Female</label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="confirmation pt-3 items-center text-center space-y-6">
                        <div>
                          <h2 className="text-white text-2xl font-bold">Do you want to save the change?</h2>
                        </div>
                        <div className="space-y-4">
                          <div className=" bg-yellow-900 text-xl h-16 flex justify-center items-center rounded-2xl text-white font-bold"><button type="submit" className="w-full" onClick={this.onUpdateProfile}>Save change</button></div>
                          <div className=" bg-yellow-500 text-xl h-16 flex justify-center items-center rounded-2xl text-yellow-900 font-bold"><button className="w-full">Cancel</button></div>
                        </div>
                        <div className="space-y-4">
                          <div className="bg-white text-xl h-16 flex justify-center items-center rounded-2xl text-yellow-900">
                            <button className="flex justify-between items-center w-full px-6 font-bold">
                              <span>Edit password</span>
                              <span>{'>'}</span>
                            </button>
                          </div>
                          <div className="bg-white text-xl h-16 flex justify-center items-center rounded-2xl text-yellow-900">
                            <button className="flex justify-between items-center w-full px-6 font-bold">
                              <span>Log out</span>
                              <span>{'>'}</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              )
            })}
            </div>
          </div>
        );
    }
}
const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
  history: state.history
})
const mapDispatchToProps = {getProfile, getHistoryProducts, putProfile}
export default connect(mapStateToProps, mapDispatchToProps)(Profile)