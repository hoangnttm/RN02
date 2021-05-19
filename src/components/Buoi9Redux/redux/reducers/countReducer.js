import { COUNT_DOWN, COUNT_UP } from "../actions/countAction";

const initState = {
    number: 10
}

const countReducer = (state = initState, action) => {
    switch (action.type) {
        case COUNT_UP: {
            console.log(action);
            state.number = state.number + action.payload;
            return { ...state };
        }
        case COUNT_DOWN: {
            console.log('COUNT_DOWN', action);
            state.number = action.payload;
            return { ...state };
        }
        default:
            return { ...state };
    }
}


export default countReducer;