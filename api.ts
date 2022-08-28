import { collection, getDocs } from 'firebase/firestore';
import database from './firebase';

export interface Question {
    id: string,
    keyword: string,
    forbiddenWords: string[]
}

export const getAllQuestions = async (): Promise<Record<string, Question>> => {
    console.log('ww')
    const questionsRef = collection(database, 'taboo_questions');
    const docs = await getDocs(questionsRef);
    const questions = docs.docs[0].data().questions;
    return questions;
}