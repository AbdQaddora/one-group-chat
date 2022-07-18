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
    const [user, setUser] = useState();

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () => {
        return signOut(auth);
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        })
    }, [])

    return (
        <AuthContext.Provider value={{
            user: user,
            signUp: signUp,
            login: login,
            logout: logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}
