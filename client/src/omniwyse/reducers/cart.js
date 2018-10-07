
import { combineReducers } from 'redux'
import { ADD_TO_CART,
          ADD_TO_CART_SUCCESS,
          ADD_TO_CART_FAILURE, 
          REMOVE_FROM_CART, 
          CHECKOUT_REQUEST, 
          CHECKOUT_SUCCESS, 
          CHECKOUT_FAILURE,
          CART_REQUEST,
          CART_SUCCESS,
          CART_FAILURE,
          REMOVE_FROM_CART_SUCCESS,
          ORDER_REQUEST,
          ORDER_SUCCESS,
          ORDER_FAILURE,
          DELETE_CART,
          DELETE_CART_SUCCESS,
          DELETE_CART_FAILURE,

          } from '../../omniwyse/actions/actions'

const initialState = {
  checkoutStatus: {
    checkoutPending: false,
    error: null,
  },
  quantityById: {},
  cartStatus: {
    addToCartPending: false,
    deleteCartRequest: false,
    error: null,
    isItemRemoved: false,
  },
  orderStatus: {
    orderRequestPending: false,
    error: null,
  }
}

function checkoutStatus(state = initialState.checkoutStatus, action) {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return {
        checkoutPending: true,
        error: null,
      }
    case CHECKOUT_SUCCESS:
      return initialState.checkoutStatus
    case CHECKOUT_FAILURE:
      return {
        checkoutPending: false,
        error: action.error,
      }
    default:
      return state
  }
}

function quantityById(state = initialState.quantityById, action) {
  const { productId } = action
  switch (action.type) {
    case  REMOVE_FROM_CART_SUCCESS:
      return {
        ...state, isItemRemoved: true
    }

    case CHECKOUT_SUCCESS:
      return initialState.quantityById
/*     case ADD_TO_CART:
      return {
        ...state,
        [productId]: (state[productId] || 0) + 1,
      }
    case REMOVE_FROM_CART:
      const qty = (state[productId] || 0) - 1
      const copy = { ...state }
      if (qty > 0) copy[productId] = qty
      else delete copy[productId]
      return copy */
    default:
      return state
  }
}

function cartDetailsStatus(state = initialState.cartStatus, action) {
  switch(action.type) {
    case ADD_TO_CART:         return { addToCartPending: true, error: false}
    case ADD_TO_CART_SUCCESS: return { ...state, product:action.product}
    case ADD_TO_CART_FAILURE: return {addToCartPending: false, error : action.error}
    case CART_REQUEST:        return { isCartRequest: true, error: false}
    case CART_SUCCESS:        return { ...state, cartDetails: action.cartDetails}
    case CART_FAILURE:        return { isCartRequest: false, error: action.error}
    case DELETE_CART:        return { deleteCartRequest: true, error: false}
    case DELETE_CART_SUCCESS:        return { ...state, cartCount: action.cartDetails}
    case DELETE_CART_FAILURE:        return { deleteCartRequest: false, error: action.error}
    default: 
        return state
  }
}


function order(state = initialState.orderStatus, action) {
  switch(action.type) {

    case ORDER_REQUEST: return { orderRequestPending: true, error: false}
    case ORDER_SUCCESS: return { ...state, order:action.order}
    case ORDER_FAILURE: return {orderRequestPending: false, error : action.error}
    
    default: 
        return state
  }
}

export default combineReducers({
  checkoutStatus,
  quantityById,
  cartDetailsStatus,
  order,
})

export function getQuantity(state, productId) {
  return state.quantityById[productId] || 0
}

export function getAddedIds(state) {
  return Object.keys(state.quantityById)
}
