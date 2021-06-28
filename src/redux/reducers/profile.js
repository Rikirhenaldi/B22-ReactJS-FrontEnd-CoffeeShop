const initialState = {
  data: {},
  details: {},
  errMseg: "",
  
}

const profile = (state= initialState, action) => {
  switch(action.type){
    case 'GET_PROFILE': {
      return {
        ...state,
        data: action.payload,
      } 
    }
    case 'UPDATE_PROFILE': {
      return {
        ...state,
        details: action.payload,
      } 
    }
    default: {
      return{
        ...state
      }
    }
  }
}

export default profile