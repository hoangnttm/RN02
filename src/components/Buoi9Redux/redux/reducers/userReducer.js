import { USER_COUNT_DOWN, USER_COUNT_UP } from "../actions/userAction";

const initState = {
    userName: 'React-native 2',
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case USER_COUNT_DOWN:
            state.userName = 'HOANG';
            return { ...state };
        case USER_COUNT_UP:
            state.userName = 'USER_COUNT_UP';
            return { ...state };
        default:
            return { ...state };

    }
}

export default userReducer;