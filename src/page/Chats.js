import React from 'react';
import '../App.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { getProfile } from '../redux/actions/profile';
import { getHistoryProducts } from '../redux/actions/history';
import { getChatList, getChatRoom, sendMessage } from '../redux/actions/chats';
import {FaPencilAlt} from 'react-icons/fa'
import { putProfile } from '../redux/actions/profile';
import {FiSearch} from 'react-icons/fi'
import { FiSend } from 'react-icons/fi';
import { FiPaperclip } from 'react-icons/fi';
import {RiEmotionHappyLine}from 'react-icons/ri'
import defaultImg from '../asset/img/default.png'
import flatchat from '../asset/img/flatchat.png'
import  { Redirect } from 'react-router-dom'
import FlatList from 'flatlist-react'
import { io } from 'socket.io-client'
const socket = io('http://localhost:8080')
// const socket = io('https://coffee-shop-app24.herokuapp.com')

class Chats extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        id: '',
        senderName: '',
        senderMessage: "",
        senderImg: "",
        senderNumber: "",
        recipientNumber: "",
        recipientName: "",
        recipientImg: "",
        recipientMessage: "",
        phoneNumber: "",
        finaldata:[],
        chatroom: [],
        sendingMessage: '',
      }
  } 
    async componentDidMount(){
      const {token} = this.props.auth
      await this.props.getProfile(token)
      const {user} = this.props.profile?.data
      this.setState({phoneNumber: user[0].phoneNumber})
      const finaldata = []
      socket.on(this.state.phoneNumber, (data) => {
        this.onGetChat(data.sender)
      })
      await this.props.getChatList(token)
      .then(()=> {
        this.props.chats.chatlist.map(item => {
          if(this.state.phoneNumber !== item.sender){ 
          //  this.setState({id: item.id})  
          //  this.setState({senderName: item.senderName})
          //  this.setState({senderNumber: item.sender})
          //  this.setState({senderImg: item.senderImg})
           this.setState({
            id: item.id,
            senderName: item.senderName,
            senderNumber: item.sender,
            senderImg: item.senderImg,
             message: item.message
            },
            () => {
              const result1 = {id: this.state.id, name: this.state.senderName,phoneNumber: this.state.senderNumber, img: this.state.senderImg, message : this.state.message}
              const data1 = this.state.finaldata.push(result1)
            }
            )
           
          }else if (this.state.phoneNumber !== item.recipient){   
            // this.setState({id: item.id})   
            // this.setState({recipientName: item.recipientName})
            // this.setState({recipientNumber: item.recipient})
            // this.setState({recipientImg: item.recipientImg})
            this.setState({
              id: item.id,
              recipientName: item.recipientName,
              recipientNumber: item.recipient,
              recipientImg: item.recipientImg,
              message: item.message
            },
              () => {
                const result2 = {id: this.state.id, name: this.state.recipientName,phoneNumber: this.state.recipientNumber, img: this.state.recipientImg, message: this.state.message}
              const data2 = this.state.finaldata.push(result2)
              }
              )
            
          }
        })
        console.log('ini state finaldata',this.state.finaldata);
        console.log('ini apa', typeof this.props.chats.chatroom === 'object');
      })
      .catch((err) => {
        console.log(err);
      })
      console.log('phone number', this.state.phoneNumber);
    } 

    onGetChat = async (recipient) =>{ 
      const {token} = this.props.auth
      await this.props.getChatRoom(token, recipient).then(()=> {
        // const datachat = this.state.chatroom.push(this.props.chats.chatroom);
        this.setState({chatroom : this.props.chats.chatroom},
          () => {<Redirect to='/Chat'/>}
          )
      })
      // console.log('ini chatroom',this.state.chatroom);
    }

    onSendMessage = (e) =>{
      e.preventDefault()
      const {token} = this.props.auth
      const {sendingMessage} = this.state
      if(this.props.chats.chatroom[0].sender !== this.state.phoneNumber){ 
      this.props.sendMessage(token, this.props.chats.chatroom[0].sender, sendingMessage).then(()=> {
        const datasending1 = {sender: this.props.phoneNumber, recipient: this.props.chats.chatroom[0].sender, message : this.state.sendingMessage}
        this.state.chatroom.push(datasending1);
        // return this.props.getChatRoom(token, this.props.chats.chatroom[0].sender)
        this.setState({sendingMessage: ""})
        this.props.getChatList(token)
        this.onGetChat(this.props.chats.chatroom[0].sender)
      })
      }else{
        this.props.sendMessage(token, this.props.chats.chatroom[0].recipient, sendingMessage).then(() => {
          const datasending2 = {sender: this.props.phoneNumber, recipient: this.props.chats.chatroom[0].recipient, message : this.state.sendingMessage}
          this.state.chatroom.push(datasending2);
          // return this.props.getChatRoom(token, this.props.chats.chatroom[0].recipient)
          this.setState({sendingMessage: ""})
          this.props.getChatList(token)
          this.onGetChat(this.props.chats.chatroom[0].recipient)
        })
      }
    }
    render() {
        return (
          <div className="bannerChats">
            <div className="parentChats">
              <div className="chatsList">
                <div className="chatsListItem">
                  <div className="flex flex-row mt-16 relative">
                    <input className="search w-96 h-14 rounded-full flex justify-center pl-16 pr-10 relative" type="search" name="" id="" placeholder="Search"/>
                    <i className="absolute top-4 left-6"><FiSearch size='25'/></i> 
                  </div>
                  <div className=" mt-16 text-white font-medium">
                    <div>Choose someone you want to talk with</div>
                  </div>
                  <div className="mt-12 h-96 flex flex-col overflow-y-scroll no-scrollbar">
                  {this.props.chats.chatlist.map((item, idx)=>{
                    return(
                        <div key={item.id}>
                            <button className='flex items-center w-96 h-28 border-white border-b-2 mb-4' onClick={()=> this.onGetChat(item.sender === this.state.phoneNumber ? item.recipient : item.sender)} >
                              <div className=" flex flex-row ">
                                <div className=" w-20 h-20 rounded-full">
                                  {item.senderImg && item.recipientImg ? <img className=" w-20 h-20 rounded-full bg-white" src={item.sender === this.state.phoneNumber ? item.recipientImg : item.senderImg } alt=""/>
                                  :
                                  <img className=" w-20 h-20 rounded-full bg-white" src={defaultImg} alt=""/>
                                   }
                                </div>
                                <div className=" flex flex-col justify-center ml-4 items-start">
                                  <div className=" mb-4 text-white">{item.sender === this.state.phoneNumber ? item.recipientName : item.senderName}</div>
                                  <div className=" text-white opacity-80 text-xs">{item.message}</div>
                                </div>
                              </div>
                            </button>
                          </div>
                      )
                  })}
                  </div>
                </div>
              </div>
              <div className="chatsRoom">
                  {this.state.chatroom.length < 1 ?
                    <div className="flex justify-center flex-col items-center h-full w-full">
                      <div className=" w-56 h-56 rounded-full bg-white"><img  className=" w-56 h-56 rounded-full bg-white border-4 border-yellow-900" src={flatchat} alt=""/></div>
                      <div className="mt-10 text-yellow-900 font-bold text-2xl">Lets Make Conversations with Another Users</div>
                      <div className="mt-5 text-yellow-900 font-bold ">Choose or search someone you want to talk with</div>
                    </div>
                    : 
                    <div className='chatsRoomItem'>
                    <div className=" w-full h-34 mt-10 text-3xl font-bold text-gray-700 pl-10">
                    <div className=" flex flex-row items-center w-full h-28">
                      <div className=" w-20 h-20 rounded-full bg-white"><img className=" w-20 h-20 rounded-full bg-white" src={this.props.chats?.chatroom[0]?.recipient !== this.state.phoneNumber ? this.props.chats?.chatroom[0]?.recipientImg !== null ? this.props.chats?.chatroom[0]?.recipientImg : defaultImg : this.props.chats?.chatroom[0]?.senderImg !== null ? this.props.chats?.chatroom[0]?.senderImg : defaultImg  } alt=""/></div>
                      <div className=" flex flex-col ml-4 mt-4">
                        <div className=" mb-4 text-white text-2xl font-bold ">{this.props.chats?.chatroom[0]?.recipient !== this.state.phoneNumber ? this.props.chats?.chatroom[0]?.recipientName : this.props.chats?.chatroom[0]?.senderName  }</div>
                        <div className=" mb-4 text-white text-sm font-bold ">Online</div>
                      </div>
                    </div>
                </div>
                </div>
                   }
                <div className="chatBoxRoom w-full overflow-y-scroll no-scrollbar overscroll-none bg-blue py-10 px-3">
                {this.state.chatroom.length < 1 ? null 
                : this.props.chats.chatroom.map(item => {
                  if(item.sender !== this.state.phoneNumber){
                    return(
                          <div className="w-full mb-3" key={item.id}>
                            <div className="cardmessage bg-yellow-900 break-all  p-4 rounded-xl text-white font-semibold box-content">
                              {item.message}
                            </div>
                          </div>
                    )
                  }else{
                    return(
                    <div className=" w-full flex justify-end items-end mb-3" key={item.id}>
                        <div className="cardmessage bg-yellow-500 break-all p-4 rounded-xl text-white font-semibold flex items-end box-content">
                          {item.message}
                        </div>
                    </div>
                    )
                  }
                })
                }
                </div>
                {/* <div className="chatBoxRoom w-full overflow-y-scroll no-scrollbar overscroll-none bg-blue py-10 px-3">
                <FlatList
                  list={this.state.chatroom}
                  renderItem={(item) => {
                    if(item.sender !== this.state.phoneNumber){
                      return(
                            <div className="w-full mb-3" key={item.id}>
                              <div className="bg-yellow-900 h-auto w-96 p-4 rounded-xl text-white font-semibold">
                                {item.message}
                              </div>
                            </div>
                      )
                    }else{
                      return(
                      <div className="w-full flex justify-end items-end mb-3" key={item.id}>
                          <div className="bg-yellow-500 h-auto w-96 p-4 rounded-xl text-white font-semibold flex items-end">
                            {item.message}
                          </div>
                      </div>
                      )
                    }
                  }}
                  
                  // reversed
                  /> */}
                {/* </div> */}
                <div className="flex flex-row w-full ml-6 py-2">
                <button className="w-12 h-12 rounded-full bg bg-yellow-500 flex justify-center items-center mr-3">
                  <RiEmotionHappyLine size={40} color="white" fontWeight='bold' /> 
                </button>
                <button className="w-12 h-12 rounded-full bg bg-yellow-500 flex justify-center items-center mr-3">
                  <FiPaperclip size={33} color="white" fontWeight='bold' /> 
                </button>
                  <input onChange={e=>this.setState({sendingMessage: e.target.value})} value={this.state.sendingMessage} className="inputSize border-yellow-500 border-4 rounded-3xl mr-4 px-6" type="text" name="" id="" placeholder="Type your message"/>
                  <button onClick={this.onSendMessage} className="w-14 h-14 rounded-full bg bg-yellow-500 flex justify-center items-center pt-1 pr-1">
                    <FiSend size={30} color="white" fontWeight='bold' /> 
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
  chats: state.chats
})
const mapDispatchToProps = {getProfile, getChatList, getChatRoom, sendMessage}
export default connect(mapStateToProps, mapDispatchToProps)(Chats)