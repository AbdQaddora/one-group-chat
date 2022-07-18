import {useContext, createContext } from 'react';
import { collection, addDoc, serverTimestamp, orderBy , query } from "firebase/firestore";
import { useCollectionData  } from 'react-firebase-hooks/firestore';
// db
import { db } from '../firebase';
import { useAuthContext } from './AuthContext';

const FireStoreContext = createContext({});
export const useFireStoreContext = () => {
    return useContext(FireStoreContext);
}

export default function FireStoreContextProvider({ children }) {
    const { user } = useAuthContext();
    const [messages , , ,] = useCollectionData (query(collection(db, 'messages') , orderBy('time')));

    const sendMessage = (message) => {
        addDoc(collection(db, 'messages'), {
            message: message,
            uesr: user.uid,
            userName: user.email,
            time: serverTimestamp()
        })
    }




    return (
        <FireStoreContext.Provider value={{ sendMessage, messages }}>
            {children}
        </FireStoreContext.Provider>
    )
}

