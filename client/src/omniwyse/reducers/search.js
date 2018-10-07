import { combineReducers } from 'redux'
import { SEARCH_BOOKS, 
          SEARCH_BOOKS_SUCCESS, 
          SEARCH_BOOKS_FAILURE } 
          from '../../omniwyse/actions/actions'

const initialState = {
    searchStatus: {
        isSearch: false,
        error: null
    },
    products: [],
}

export default function search (state = initialState.searchStatus, action) {
    switch(action.type) {
        case SEARCH_BOOKS:
            return {
                isSearch: true,
                error: null,
            }
        case SEARCH_BOOKS_SUCCESS:
            return {
                ...state, products: action.products
            }

        case SEARCH_BOOKS_FAILURE:
            return {
                loginPending: false,
                error: action.error,
            }
        default:
            return state

    }
}

