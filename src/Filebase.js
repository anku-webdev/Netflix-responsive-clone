import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { use } from "react";
import { toast } from "react-toastify";
const firebaseConfig = {
    apiKey: "AIzaSyCkh9g5HfpmHOZbeE8J9QsydopE6mx4Jzg",
    authDomain: "netflix-clone-2144f.firebaseapp.com",
    projectId: "netflix-clone-2144f",
    storageBucket: "netflix-clone-2144f.firebasestorage.app",
    messagingSenderId: "454883768631",
    appId: "1:454883768631:web:3526fd886e6cf90c7c02b2",
    measurementId: "G-20BK9R1YBG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);


const signUp = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authPorvider: 'Local',
            email
        });
    } catch (error) {
        console.log(error);
        toast.error(error.code)
    }
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
        toast('login')

    } catch (error) {
        console.log(error);
        toast.error(error.code)
    }
}

const logout = () => {
    signOut(auth);

}
export { auth, db, signUp, login, logout }