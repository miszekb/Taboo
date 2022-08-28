import { RECEIVE_QUESTIONS, ActionObject } from '../actions/questions';

export default function questions(state = {}, action: ActionObject) {
    switch(action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        default:
            return state;
    }
}