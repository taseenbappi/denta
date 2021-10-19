import initializeAuth from "../utilities/Firebase/firebase.init"
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile
} from "firebase/auth";
import { useEffect, useState } from "react";

// firebase initialize
initializeAuth();

const useFirebase = () => {

    const [user, setUser] = useState({});

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    // google sign in handler
    const googleSignInHandler = () => {

        return signInWithPopup(auth, googleProvider);

    }
    // register handler
    const registerHangler = (email, password, name) => {

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // sign up
                const user = userCredential.user;
                userNameUpdate(name);
                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });

    }
    // user name updater
    const userNameUpdate = (name) => {

        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            // Profile updated!
            // ...
        }).catch((error) => {
            // An error occurred
            // ...
        });
    }
    // Email & password login handler 
    const emailPasswordLoginHangler = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password);


    }
    // auth observer 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
    }, [])

    // logout handler
    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({});
        }).catch((error) => {
            // An error happened.
        });
    }
    return {
        googleSignInHandler,
        registerHangler,
        emailPasswordLoginHangler,
        userNameUpdate,
        logOut,
        user,
        setUser

    };

}
export default useFirebase;