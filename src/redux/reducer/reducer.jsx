import {GET_DATA, HUNDLE_TESTS, SIGNIN_SUCCESS} from "../types/types";

const InitialState = {
    roleUserTests: []
}

const reducer = (state = InitialState, action) => {
    switch (action.type) {
        case SIGNIN_SUCCESS:
            return {
                ...state,
                user: action.payload
            }
        case GET_DATA:
            return {
                ...state,
                roleUserTests: action.payload
            }
        case HUNDLE_TESTS:
            let data=state.roleUserTests
            data.forEach((test) => {
                if (test.id === action.payload.id) {
                    test.isWorked = true;
                    test.variants.forEach((variant) => {
                        if (variant.code === action.payload.code) {
                            variant.clicked = true;
                        }
                        variant.isDesible=true;
                    })
                }
            })
            return {...state,roleUserTests: data}
        default:
            return state;
    }
}

export default reducer;