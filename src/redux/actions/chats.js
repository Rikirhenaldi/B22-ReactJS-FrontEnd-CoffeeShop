import { http } from "../../helpers/http"

// eslint-disable-next-line no-undef
const {REACT_APP_BACKEND_URL : URL} = process.env

export const getChatList = (token) => {
  return async (dispatch) => {
    const {data} = await http(token).get(`${URL}/chats/`)
    console.log(data);
    dispatch({
      type: 'CHATLIST_GET',
      payload: data.results,
    })
  }
}

export const getChatRoom = (token, recipient) => {
  return async (dispatch) => {
      const {data} = await http(token).get(`${URL}/chats/chatroom/?recipient=${recipient}`)
      dispatch({
        type: 'CHATROOMS_GET',
        payload: data.results
    })
  }
}

export const sendMessage = (token, recipient, message) => {
  return async (dispatch) => {
    const form = new URLSearchParams()
    form.append('recipient', recipient)
    form.append('message', message)
      const {data} = await http(token).post(`${URL}/chats/sendmessage`, form.toString())
      dispatch({
        type: 'SEND_MESSAGE',
        payload: data.message
    })
  }
}
