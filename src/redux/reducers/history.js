const initialState = {
  products : [],
  details : null
}

const history = (state= initialState, action) =>{
  switch(action.type){
        case 'GET_HISTORY_PAYMENT' :{
      return{
        ...state,
        products: action.payload
      }
    }
    case 'GET_HISTORY_PAYMENT_DETAIL' :{
      return{
        ...state,
        details: action.payload
      }
    }
    default: {
      return{
        ...state
      }
    }
  }
}

export default history