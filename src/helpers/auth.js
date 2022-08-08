import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { localStorage } from "./localStorage";

const authUser = () => {
    const [user, setUser] = localStorage("user", null);
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    return signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        setUser(result.user);
        return result.user;
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
    });
}

const isUserAuth = () =>{  
    const [user, setUser] = localStorage("user", null);
    return user;
}

const unAuthUser = () =>{  
    const [user, setUser] = localStorage("user", null);
    setUser(null);
    return true
}

export{
    authUser,
    isUserAuth,
    unAuthUser
}
