export const LOGIN_REQUEST        = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS        = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE        = 'LOGIN_FAILURE'
export const USER_PROFILE_SUCCESS = 'USER_PROFILE_SUCCESS';

export const SIGNUP_REQUEST       = 'SIGNUP_REQUEST'
export const SIGNUP_SUCCESS       = 'SIGNUP_SUCCESS'
export const SIGNUP_FAILURE       = 'SIGNUP_FAILURE'

export const GET_ALL_PRODUCTS     = 'GET_ALL_PRODUCTS'
export const RECEIVE_PRODUCTS     = 'RECEIVE_PRODUCTS'

export const ADD_TO_CART          = 'ADD_TO_CART';
export const REMOVE_FROM_CART     = 'REMOVE_FROM_CART';
export const REMOVE_FROM_CART_SUCCESS = 'REMOVE_FROM_CART_SUCCESS';
export const ADD_TO_CART_SUCCESS  = 'ADD_TO_CART_SUCCESS';
export const ADD_TO_CART_FAILURE  = 'ADD_TO_CART_FAILURE';

export const CART_REQUEST         = 'CART_REQUEST';
export const CART_SUCCESS         = 'CART_SUCCESS';
export const CART_FAILURE         = 'CART_FAILURE';
export const DELETE_CART          = 'DELETE_CART';
export const DELETE_CART_SUCCESS  = 'DELETE_CART_SUCCESS';
export const DELETE_CART_FAILURE  = 'DELETE_CART_FAILURE';

export const ORDER_REQUEST        = 'ORDER_REQUEST';
export const ORDER_SUCCESS        = 'ORDER_SUCCESS';
export const ORDER_FAILURE        = 'ORDER_FAILURE';

export const CHECKOUT_REQUEST     = 'CHECKOUT_REQUEST';
export const CHECKOUT_SUCCESS     = 'CHECKOUT_SUCCESS';
export const CHECKOUT_FAILURE     = 'CHECKOUT_FAILURE';

export const SEARCH_BOOKS         = 'SEARCH_BOOKS';
export const SEARCH_BOOKS_SUCCESS = 'SEARCH_BOOKS_SUCCESS';
export const SEARCH_BOOKS_FAILURE = 'SEARCH_BOOKS_FAILURE';

export const RESET_PASSWORD       = 'RESET_PASSWORD';
export const RESET_PASSWORD_EMAIL = 'RESET_PASSWORD_EMAIL';

export function sendLoginRequest(userCredentials) {
  return {
    type: LOGIN_REQUEST,
    userCredentials,
  }
}

export function onLoginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user,
  }
}

export function onUserProfileSuccess(userProfile) {
  return {
    type: USER_PROFILE_SUCCESS,
    userProfile,
  }
}

export function onLoginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    error,
  }
}


export function sendSignupRequest(userObj) {
  return {
    type: SIGNUP_REQUEST,
    userObj,
  }
}

export function onSignupSuccess(signedUpUser) {
  return {
    type: SIGNUP_SUCCESS,
    signedUpUser,
  }
}

export function onSignupFailure(user) {
  return {
    type: SIGNUP_FAILURE,
    user,
  }
}


export function getAllProducts() {
  return {
    type: GET_ALL_PRODUCTS,
  }
}

export function receiveProducts(products) {
  return {
    type: RECEIVE_PRODUCTS,
    products: products,
  }
}

export function addToCart(product, email) {
  return {
    type: ADD_TO_CART,
    product,
    email,
  }
}

export function removeFromCart(id) {
  return {
    type: REMOVE_FROM_CART,
    id,
  }
}
export function removeFromCartSuccess(count) {
  return {
    type: REMOVE_FROM_CART_SUCCESS,
    count,
  }
}

export function addToCartSuccess(product) {
  return {
    type: ADD_TO_CART_SUCCESS,
    product,
  }
}

export function addToCartFailure(error) {
  return {
    type: ADD_TO_CART_FAILURE,
    error,
  }
}

export function cartRequest(email) {
  return {
    type: CART_REQUEST,
    email,
  }
}

export function cartSuccess(cartDetails) {
  return {
    type: CART_SUCCESS,
    cartDetails,
  }
}

export function cartFailure(error) {
  return {
    type: CART_FAILURE,
    error,
  }
}

export function deleteCartRequest(email) {
  return {
    type: DELETE_CART,
    email,
  }
}

export function deleteCartSuccess(cartCount) {
  return {
    type: DELETE_CART_SUCCESS,
    cartCount,
  }
}

export function deleteCartFailure(error) {
  return {
    type: DELETE_CART_FAILURE,
    error,
  }
}

export function orderRequest(order) {
  return {
    type: ORDER_REQUEST,
    order,
  }
}

export function orderSuccess(order) {
  return {
    type: ORDER_SUCCESS,
    order,
  }
}

export function orderFailure(error) {
  return {
    type: ORDER_FAILURE,
    error,
  }
}


export function checkout() {
  return {
    type: CHECKOUT_REQUEST,
  }
}

export function checkoutSuccess(cart) {
  return {
    type: CHECKOUT_SUCCESS,
    cart,
  }
}

export function checkoutFailure(error) {
  return {
    type: CHECKOUT_FAILURE,
    error,
  }
}

export function searchRequest(value) {
  return {
    type: SEARCH_BOOKS,
    value,
  }
}

export function onSearchSuccess(products) {
  return {
    type: SEARCH_BOOKS_SUCCESS,
    products,
  }
}

export function onSearchFailureOrEmpty(message) {
  return {
    type: SEARCH_BOOKS_FAILURE,
    message,
  }
}

export function resetPasswordRequest(email) {
  return {
    type: RESET_PASSWORD,
    email,
  }
}

export function onResetPasswordEmailSent(message) {
  return {
    type: RESET_PASSWORD_EMAIL,
    message,
  }
}
