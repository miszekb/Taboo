export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
import { getAllQuestions } from '../../api';

export interface ActionObject {
    type: string;
    [key: string]: any;
}

//TODO: split questions into categories 
export const receiveQuestions = (questions: any): ActionObject => {
    console.log(questions);
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export const handleReceiveQuestions = () => {
    return (dispatch) => {
        return getAllQuestions()
            .then(questions => {
                console.log(questions);
                dispatch(receiveQuestions(questions));
            })
    };
}