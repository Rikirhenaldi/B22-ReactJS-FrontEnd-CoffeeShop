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

export const searchProducts = (search, sort='price') => {
  if(!search.startsWith('http')){
    return async (dispatch) => {
      const {data} = await http().get(`${URL}/products/?search=${search}&col=${sort}`,)
      dispatch({
        type: 'SEARCH_PRODUCT',
        payload: {
          products: data.results,
          pageInfo: data.pageInfo
        }
    })
    }
  }else{
    return async (dispatch) => {
      const {data} = await http().get(search)
      dispatch({
        type: 'SEARCH_GET_NEXT',
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