import { useContext, createContext, useState } from 'react';
import { collection, addDoc, orderBy, query, doc, setDoc, updateDoc } from "firebase/firestore";
import { useCollectionData, useDocumentData } from 'react-firebase-hooks/firestore';
// db
import { db } from '../firebase';
import { useAuthContext } from './AuthContext';

// nanoid
import { nanoid } from 'nanoid'

const FireStoreContext = createContext({});
export const useFireStoreContext = () => {
    return useContext(FireStoreContext);
}

export default function FireStoreContextProvider({ children }) {
    const { user } = useAuthContext();
    const [generalChatRoomMessages, , ,] = useCollectionData(query(collection(db, 'general-messages'), orderBy('time')));
    const [roomId, setRoomId] = useState("x");

    const [RoomByIdObject, ,] = useDocumentData(doc(db, 'rooms', roomId));

    const createMessageObject = (message) => {
        return {
            message: message,
            uesr: user.uid,
            userName: user.email,
            time: new Date()
        }
    }

    const sendMessageToGeneralRoom = (message) => {
        try {
            addDoc(collection(db, 'general-messages'), createMessageObject(message))
        } catch (error) {
            console.log(error);
        }

    }

    const sendMessageToRoomById = (message) => {
        try {
            updateDoc(doc(db, 'rooms', roomId), {
                messages: [...RoomByIdObject.messages, createMessageObject(message)]
            })
        } catch (error) {
            console.log(error);
        }
    }

    const getNewRomID = () => {
        return nanoid().slice(0, 8);
    }

    const createNewRoom = () => {
        const roomId = getNewRomID();
        console.log(roomId);
        try {
            setDoc(doc(db, 'rooms', roomId), { messages: [] });
            console.log(roomId);
            setRoomId(roomId);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <FireStoreContext.Provider value={{
            sendMessageToGeneralRoom,
            generalChatRoomMessages,
            createNewRoom,
            roomId,
            RoomByIdObject,
            sendMessageToRoomById,
            setRoomId
        }}>
            {children}
        </FireStoreContext.Provider>
    )
}

