export const PLAYER_SELECT='PLAYER_SELECT';
export const PLAY='PLAY';
export const RESULT='RESULT';
export const RESET='RESET';


export const playerSelect = (payload) => {
    return {
        type: PLAYER_SELECT,
        payload,
    }
}
export const play = (payload) => {
    return {
        type: PLAY,
        payload,
    }
}
export const showResult = () => {
    return {
        type: RESULT,
    }
}
export const reset = () => {
    return {
        type: RESET,
    }
}