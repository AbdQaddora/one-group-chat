import React, { useEffect, useRef } from 'react'
import ChatRoom from '../../Common/ChatRoom';
import { useFireStoreContext } from '../../Context/FireStoreContext'
import { useNavigate } from "react-router-dom";

export default function NewRoom() {
    const { createNewRoom, roomId, RoomByIdObject, sendMessageToRoomById } = useFireStoreContext();
    const navigate = useNavigate()
    const isFirstTime = useRef(true);
    useEffect(() => {
        createNewRoom();
    }, [createNewRoom]);

    useEffect(() => {
        if (!isFirstTime.current) {
            console.log(roomId);
            navigate(`/room/${roomId}`)
        } else {
            isFirstTime.current = false
        }
    }, [roomId, navigate])

    return (
        <>
            {RoomByIdObject && <ChatRoom messages={RoomByIdObject.messages} roomId={roomId} sendMessage={sendMessageToRoomById} />}
        </>
    )
}
