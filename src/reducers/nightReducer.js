import {NIGHT_ACTION} from "../actions/types";

const initialState = false

export default function (state = initialState, action) {
    switch (action.type) {
        case NIGHT_ACTION:
            return !state
        default:
            return state
    }
}