import { http } from "../../helpers/http"

const {REACT_APP_BACKEND_URL : URL} = process.env

export const getProducts = (url) => {
  if(typeof url === "number"){
    return async (dispatch) => {
      const {data} = await http().get(`${URL}/products/category/${url}`)
      dispatch({
        type: 'PRODUCTS_GET',
        payload: {
          products: data.results,
          pageInfo: data.pageInfo
        }
      })
    }
  }else{
    return async (dispatch) => {
      const {data} = await http().get(url)
      dispatch({
        type: 'PRODUCTS_GET_NEXT',
        payload: {
          products: data.results,
          pageInfo: data.pageInfo
        }
      })
    }
  }
}

export const getDetails = (id) => {
  return async (dispatch) => {
    const {data} = await http().get(`${URL}/products/${id}`)
    dispatch({
      type: 'PRODUCTS_GET_DETAILS',
      payload: {
        item: data.results,
        order : data.order
      }

    })
  }
}