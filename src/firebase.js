import {initializeApp} from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDFnvwhVGumj8ZUsCoF5SLNBq5fwGJqAp4",
    authDomain: "netflix-cln-750b3.firebaseapp.com",
    projectId: "netflix-cln-750b3",
    storageBucket: "netflix-cln-750b3.appspot.com",
    messagingSenderId: "471215946231",
    appId: "1:471215946231:web:5e06fe9e8a1163c80316f2"
};

const firebaseApp = initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// // Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(firebaseApp);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(firebaseApp);





export {auth};
export default db;