import { http } from "../../helpers/http";

const {REACT_APP_BACKEND_URL : URL} = process.env


export const postPayment = (data, token) => {
  console.log("ini data", data)
  return async (dispatch) => {
    const form = new URLSearchParams()
    data.forEach((item) => {
      form.append('product_id', item.order.idProduct)
      form.append('product_amount', item.order.amount)
    })
      form.append('payment_method', null)
    try{
      const {data} = await http(token).post(`${URL}/private/transactions`, form.toString())
      dispatch({
        type: 'CREATE_PAYMENT',
        payload: data.message
    })
    }catch(err){
      dispatch({
        type: 'CREATE_PAYMENT_FAILED',
        payload: err.response.data.message
    })
    }
  }
}

export const postPayment2 = (id,amount, token) => {
  return async (dispatch) => {
    const form = new URLSearchParams()
      form.append('product_id', id)
      form.append('product_amount', amount)
      form.append('payment_method', null)
    try{
      const {data} = await http(token).post(`${URL}/private/transactions`, form.toString())
      dispatch({
        type: 'CREATE_PAYMENT',
        payload: data.message
    })
    }catch(err){
      dispatch({
        type: 'CREATE_PAYMENT_FAILED',
        payload: err.response.data.message
    })
    }
  }
}
