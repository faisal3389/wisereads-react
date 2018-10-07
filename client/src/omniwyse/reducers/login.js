import { combineReducers } from 'redux'
import { LOGIN_REQUEST, 
          LOGIN_SUCCESS, 
          LOGIN_FAILURE,
          USER_PROFILE_SUCCESS,
          RESET_PASSWORD_EMAIL,
         } from '../../omniwyse/actions/actions'

const initialState = {
    loginStatus: {
        loginPending: false,
        error: null
    },
    user: {},
}

export default function login (state = initialState.loginStatus, action) {
    switch(action.type) {
        case LOGIN_REQUEST:
            return {
                loginPending: true,
                error: null,
            }
        case LOGIN_SUCCESS:
            return {
                ...state, user: action.user
            }
        
        case USER_PROFILE_SUCCESS:
            return {
                ...state, userProfile:action.userProfile
            }

        case LOGIN_FAILURE:
            return {
                loginPending: false,
                error: action.error,
            }
        case RESET_PASSWORD_EMAIL:
            return {
            ...state, message:action.message
        }
        default:
            return state

    }
}

