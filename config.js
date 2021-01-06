import Firebase from 'firebase';
let config = {
    apiKey: "AIzaSyAhGfetFYDjL--Hziw6EXvjtRcCSNzSHEY",
    authDomain: "firstnativeapp-93a53.firebaseapp.com",
    databaseURL: "https://firstnativeapp-93a53.firebaseio.com",
    projectId: "firstnativeapp-93a53",
    storageBucket: "",
    messagingSenderId: "952383856319",
    appId: "1:952383856319:web:1cb2b5f537bf2224"
};
let app = Firebase.initializeApp(config);
export const db = app.database();