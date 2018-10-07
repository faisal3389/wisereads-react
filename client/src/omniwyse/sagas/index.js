
import { take, put, call, fork, select, takeEvery, all } from 'redux-saga/effects'
import * as actions from '../actions/actions'
import { getCart } from '../reducers'
import  HomeApi  from '../services/homeService'
import  CartApi  from "../services/cartService"
import {LoginService} from "../services/loginService";
import {SignupService} from "../services/signupService";

export function* sendLoginRequest(userCredentials) {
  const user = yield call (LoginService.loginRequest, userCredentials)
  yield put(actions.onLoginSuccess(user));

  const userProfile = yield call(LoginService.getUserById, user.userId);
  yield put(actions.onUserProfileSuccess(userProfile));
}

export function* sendSignupRequest(userObj) {
  const signedUpUser = yield call (SignupService.signupRequest, userObj)
  yield put(actions.onSignupSuccess(signedUpUser))
}

export function* getAllProducts() {
  const products = yield call(HomeApi.getBooks)
  yield put(actions.receiveProducts(products))
}

export function* addToCart(product, email) {
  const resProduct = yield call(CartApi.addToCart, product, email)
  yield put(actions.addToCartSuccess(resProduct))
}

export function* removeItemFromCart(id) {
  const count = yield call(CartApi.removeItemFromCart, id)
  yield put(actions.removeFromCartSuccess(count))
}
export function* forgotPasswordRequest(email) {
  const message = yield call(LoginService.forgotPasswordRequest, email)
  yield put(actions.onResetPasswordEmailSent(message))
}

export function* getCartItems(email) {
  const cartDetails = yield call(CartApi.getCartItems, email)
  yield put(actions.cartSuccess(cartDetails))
}

export function* onDeleteCart(email) {
  const cartCount = yield call(CartApi.onDeleteCartItems, email)
  yield put(actions.deleteCartSuccess(cartCount))
}

export function* checkout() {
  try {
    const cart = yield select(getCart)
    yield call(CartApi.buyProducts, cart)
    yield put(actions.checkoutSuccess(cart))
  } catch (error) {
    yield put(actions.checkoutFailure(error))
  }
}

export function* orderRequest(order) {
  const order_response = yield call (CartApi.onOrderRequest, order)
  yield put(actions.orderSuccess(order_response))
}

export function* sendSearchRequest(value) {
  const products = yield call (HomeApi.onSearchBooks, value)
  yield put(actions.onSearchSuccess(products))
}

export function* watchLogin() {
  while(true) {
    const {userCredentials} =  yield take(actions.LOGIN_REQUEST)
    yield fork(sendLoginRequest, userCredentials)
  }
}

export function* watchSignup() {
  while(true) {
    const { userObj } = yield take(actions.SIGNUP_REQUEST)
    yield call(sendSignupRequest, userObj)
  }
}

export function* watchGetProducts() {
  yield takeEvery(actions.GET_ALL_PRODUCTS, getAllProducts)
}

export function* watchAddToCart() {
  while(true) {
    const { product, email } = yield take(actions.ADD_TO_CART)
    yield call(addToCart, product, email)
  }
}

export function* watchRemoveItemFromCart() {
  while(true) {
    const { id } = yield take(actions.REMOVE_FROM_CART)
    yield call(removeItemFromCart, id)
  }
}
export function* watchResetPasswordRequest() {
  while(true) {
    const { email } = yield take(actions.RESET_PASSWORD)
    yield call(forgotPasswordRequest, email)
  }
}

export function* watchCartRequest() {
  while(true) {
    const { email } = yield take(actions.CART_REQUEST)
    yield call(getCartItems, email)
  }
}

export function* watchCheckout() {
  while (true) {
    yield take(actions.CHECKOUT_REQUEST)
    yield call(checkout)
  }
}

export function* watchOrderRequest() {
  while (true) {
    const { order } = yield take(actions.ORDER_REQUEST)
    yield call(orderRequest, order)
  }
}

export function* watchSearch() {
  while(true) {
    const { value } = yield take(actions.SEARCH_BOOKS)
    yield call(sendSearchRequest, value)
  }
}

export function* watchDeleteCart() {
  while(true) {
    const { email } = yield take(actions.DELETE_CART)
    yield call(onDeleteCart, email)
  }
}

/* Registering all side effects */
export default function* root() {
  yield all([ fork(watchLogin),  
              fork(watchSignup),
              fork(watchGetProducts),
              fork(watchAddToCart),
              fork(watchCartRequest),
              fork(watchOrderRequest),
              fork(watchCheckout),
              fork(watchSearch),
              fork(watchRemoveItemFromCart),
              fork(watchResetPasswordRequest),
              fork(watchDeleteCart)  
                     
  ])
} 
