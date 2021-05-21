import { Paper, Rock, Scissor } from "../../../../assets/index";
import { PLAYER_SELECT,PLAY,RESET,RESULT } from "../actions/gameAction";

const initialState = {
    realPlayer: { 'id': 'scissor', image: Scissor, 'status': false },
    botPlayer: { 'id': 'paper', image: Paper, 'status': false },
    arrayItem: [
        { 'id': 'scissor', image: Scissor, 'status': false },
        { 'id': 'rock', image: Rock, 'status': false },
        { 'id': 'paper', image: Paper, 'status': true }
    ],
    times: 8,
    score: 0
}

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case PLAYER_SELECT:
            console.log(action.payload);
            const selectedItem = state.arrayItem.find(item => item.id === action.payload.id);
            state.realPlayer = selectedItem;
            if (!selectedItem.status) {
                const previousSelectedItem = state.arrayItem.find(x => x.status);
                previousSelectedItem.status = false;

                selectedItem.status = true;
                state.arrayItem = [...state.arrayItem];
            }
            return state;
        case RESULT:
            let thangOrThua = 0;
            switch (state.realPlayer.id) {
                case 'scissor':
                    switch (state.botPlayer.id) {
                        case 'rock':
                            thangOrThua = -1;
                            break;
                        case 'scissor':
                            thangOrThua = 0;
                            break;
                        default: thangOrThua = 1;
                    }
                    break;
                case 'rock':
                    switch (state.botPlayer.id) {
                        case 'paper':
                            thangOrThua = -1;
                            break;
                        case 'rock':
                            thangOrThua = 0;
                            break;
                        default: thangOrThua = 1;
                    }
                    break;
                default:
                    switch (state.botPlayer.id) {
                        case 'rock':
                            thangOrThua = -1;
                            break;
                        case 'paper':
                            thangOrThua = 0;
                            break;
                        default: thangOrThua = 1;
                    }
                    break;
            }
            switch (thangOrThua) {
                case -1:
                    if (state.score > 0)
                        state.score--;
                    state.times--;
                    break;
                case 1:
                    state.score++;
                    state.times++;
                    break;
                case 0:
                    state.times--;
                    break;
            }
            return state;

        case PLAY:
            console.log(action.type + " --- " + action.payload);
            state.botPlayer = state.arrayItem[action.payload];
            return state;
        case RESET:
            //console.log(action.type + " --- " + action.payload);
            state.times = 9;
            state.score = 11;
            return state;
        default:
            return state
    }
}
export default gameReducer;