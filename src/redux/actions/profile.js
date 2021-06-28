import { http } from "../../helpers/http"

const {REACT_APP_BACKEND_URL : URL} = process.env

export const getProfile = (token) => {
  return async (dispatch) => {
    const {data} = await http(token).get(`${URL}/private/profile`)
    dispatch({
      type: 'GET_PROFILE',
      payload: {
        user: data.results,
      }
    })
  }
}

export const putProfile = (data, token) => {
  return async (dispatch) => {
    const form = new FormData()
    for (let i in data) {
        if (data[i] !== "") {
          form.append(i, data[i]);
        }
      }
      const {data : userData} = await http(token).put(`${URL}/private/profile`, form)
      dispatch({
        type: 'UPDATE_PROFILE',
        payload: userData.results
      })
  }
}