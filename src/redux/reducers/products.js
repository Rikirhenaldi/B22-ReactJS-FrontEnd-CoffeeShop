const initialState = {
  data: [],
  details: {},
  order : {},
  pageInfo: {},
  search: {}
}

const products = (state= initialState, action) => {
  switch(action.type){
    case 'PRODUCTS_GET': {
      return {
        ...state,
        data: action.payload.products,
        pageInfo: action.payload.pageInfo
      } 
    }
    case 'PRODUCTS_GET_NEXT': {
      return {
        ...state,
        data:[ 
          ...state.data,
          ...action.payload.products
        ],
        pageInfo: action.payload.pageInfo
      } 
    }
    case 'PRODUCTS_GET_DETAILS' : {
      return {
        ...state,
        details: action.payload,
        order: action.payload.order
      }
    }
    case 'SEARCH_PRODUCT': {
      return {
        ...state,
        search: action.payload.products,
        pageInfo: action.payload.pageInfo
      } 
    }
    case 'SEARCH_GET_NEXT': {
      return {
        ...state,
        search:[ 
          ...state.data,
          ...action.payload.products
        ],
        pageInfo: action.payload.pageInfo
      } 
    }
    default: {
      return{
        ...state
      }
    }
  }
}

export default products