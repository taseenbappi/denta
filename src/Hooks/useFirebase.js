import initializeAuth from "../utilities/Firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuth();

const useFirebase = () => {

    const [user, setUser] = useState({});

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    // google sign in handler
    const googleSignInHandler = () => {

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;
                setUser(user);
            }).catch((error) => {
                // Handle Errors here.
                const errorMessage = error.message;
                console.log(errorMessage);

            });
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
    }, [])

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
        logOut,
        user,
        setUser

    };

}
export default useFirebase;