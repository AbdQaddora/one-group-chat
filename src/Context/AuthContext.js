import { useState, useEffect, useContext, createContext } from 'react';
import React from 'react'
// auth
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

// auth context
const AuthContext = createContext({});
export const useAuthContext = () => {
    return useContext(AuthContext);
}

export default function AuthContextProvider({ children }) {
    const [user, setUser] = useState(localStorage.getItem('ONE_GROUP_CHAT_USER') ? localStorage.getItem('ONE_GROUP_CHAT_USER') : null);

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () => {
        localStorage.removeItem('ONE_GROUP_CHAT_USER');

        return signOut(auth);
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        })
    }, [])


    const stayLogIn = () => {
        localStorage.setItem('ONE_GROUP_CHAT_USER', JSON.stringify(user));
    }

    return (
        <AuthContext.Provider value={{
            user,
            signUp,
            login,
            logout,
            stayLogIn
        }}>
            {children}
        </AuthContext.Provider>
    )
}
