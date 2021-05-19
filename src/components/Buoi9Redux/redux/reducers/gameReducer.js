import { Paper, Rock, Scissor } from "../../../../assets/index";

const initialState = {
    realPlayer:{'id': 1, image: Scissor, 'status': false },
    botPlayer:{'id': 3, image: Paper, 'status': false },
    arrayItem: [
        { 'id': 1, image: Scissor, 'status': false },
        { 'id': 2, image: Rock, 'status': false },
        { 'id': 3, image: Paper, 'status': false }
    ]
}

const gameReducer= (state = initialState, action) => {
    switch (action.type) {

    case 'A':
        return { ...state, ...payload }

    default:
        return state
    }
}
export default gameReducer;