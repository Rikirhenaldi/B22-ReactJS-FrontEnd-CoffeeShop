import { http } from "../../helpers/http";

const {REACT_APP_BACKEND_URL : URL} = process.env

export const getHistoryProducts = (token) => {
    return async (dispatch) => {
      const {data} = await http(token).get(`${URL}/private/profile/history_transactions`)
      dispatch({
        type: 'GET_HISTORY_PAYMENT',
        payload: data.results
      })
    }
  }

export const getHistoryDetails = (id, token) => {
    return async (dispatch) => {
      const {data} = await http(token).get(`${URL}/private/profile/history_transactions/${id}`)
      dispatch({
        type: 'GET_HISTORY_PAYMENT_DETAIL',
        payload: data.results
      })
    }
  }
