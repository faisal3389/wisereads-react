import { combineReducers } from 'redux'
import { ADD_TO_CART, LOGIN_REQUEST, SIGNUP_REQUEST } from '../actions/actions'
import { default as cart, getQuantity, getAddedIds } from './cart'
import { default as products, getProduct } from './products'
import login from './login';
import signup from './signup';
import search from './search';

export function getCart(state) {
  return state.cart
}

export function getCheckoutError(state) {
  return state.cart.checkoutStatus.error
}

export function isCheckoutPending(state) {
  return state.cart.checkoutStatus.checkoutPending
}

export function getTotal(state) {
  return getAddedIds(state.cart)
    .reduce((total, id) => total + getProduct(state.products, id).price * getQuantity(state.cart, id), 0)
    .toFixed(2)
}

export function getCartProducts(state) {
  return getAddedIds(state.cart).map(id => ({
    ...getProduct(state.products, id),
    quantity: getQuantity(state.cart, id),
  }))
}

const rootReducer = combineReducers({
  login,
  signup,
  cart,
  products,
  search,
})

export default function root(state, action) {
  //if (action.type === ADD_TO_CART && state.products.byId[action.productId].inventory <= 0) return state

  return rootReducer(state, action)
}
