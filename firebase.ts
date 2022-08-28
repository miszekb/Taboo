import * as firebase from 'firebase/app';
import { getFirestore } from'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyDwof2EpJnFMuj-0UmtRsKICmCXBg6pYWI',
    authDomain: 'taboo-2a932.firebaseapp.com',
    projectId: 'taboo-2a932',
    storageBucket: 'taboo-2a932.appspot.com',
    messagingSenderId: '504155222605',
    appId: '1:504155222605:web:be05eaef3ef63aea6ee204',
    measurementId: 'G-PDM0CWXHHX'
};

const app = firebase.initializeApp(firebaseConfig);
//@ts-ignore database not in the typings
export default getFirestore(app);