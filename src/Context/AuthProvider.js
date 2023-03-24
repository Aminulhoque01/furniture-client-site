
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import{createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';

export const AuthContext= createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser]= useState();
    const [loader, setLoader]= useState(true);

    const createUser=(email,password)=>{
        setLoader(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const loginUser = (email, password)=>{
        setLoader(true);
        return signInWithEmailAndPassword(auth, email,password);
    }

    const googleSingIn=(provider)=>{
        return signInWithPopup(auth, provider);
    }

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, (currenUser)=>{
            console.log(currenUser);
            setUser(currenUser);
            setLoader(false);
        })
        return ()=> unsubscribe();
    },[]);

    const authInfo={user,createUser,loader,loginUser, googleSingIn}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;