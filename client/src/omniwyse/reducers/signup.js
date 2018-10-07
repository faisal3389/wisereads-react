import { SIGNUP_REQUEST, 
          SIGNUP_SUCCESS, 
          SIGNUP_FAILURE } from '../../omniwyse/actions/actions'

const initialState = {
    signupStatus: {
        signupPending: false,
        error: null
    },

}

export default function signup (state = initialState.signupStatus, action) {
    switch(action.type) {
        case SIGNUP_REQUEST:
            return {
                signupPending: true,
                error: null,
            }
        case SIGNUP_SUCCESS:
            return {
                ...state, signedUpUser: action.signedUpUser
            }

        case SIGNUP_FAILURE:
            return {
                signupPending: false,
                error: action.error,
            }
        default:
            return state

    }
}

