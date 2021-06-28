const initialState = {
  sccMseg: '',
  errMseg : ''
}

const payment = (state= initialState, action) =>{
  switch(action.type){
    case 'CREATE_PAYMENT' :{
      return{
        ...state,
        sccMseg: action.payload
      }
    }
    case 'CREATE_PAYMENT_FAILED' :{
      return{
        ...state,
        errMseg: action.payload
      }
    }
    default: {
      return{
        ...state
      }
    }
  }
}

export default payment