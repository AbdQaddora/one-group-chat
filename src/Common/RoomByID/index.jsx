import React, { useEffect } from 'react'
import { useFireStoreContext } from '../../Context/FireStoreContext';
import ChatRoom from '../ChatRoom';
import { useParams } from 'react-router-dom';

export default function RoomByID() {
    const { RoomByIdObject, sendMessageToRoomById, setRoomId } = useFireStoreContext();
    const { roomId } = useParams();
    useEffect(() => {
        setRoomId(roomId)
    }, []);
    
    return (
        <>
            {RoomByIdObject && <ChatRoom messages={RoomByIdObject.messages} roomId={roomId} sendMessage={sendMessageToRoomById} />}
        </>
    )
}
