const initialState = {
  products: []
}

const carts = (state = initialState, action) => {
  switch (action.type) {
    case 'CARTS_ADD_ITEM': {
      return {
        ...state,
        products: [...state.products, ...[action.payload]]
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default carts
