import React from 'react'
import ChatRoom from '../../Common/ChatRoom'
import { useFireStoreContext } from '../../Context/FireStoreContext';
export default function GeneralChatRoom() {
    const { sendMessageToGeneralRoom, generalChatRoomMessages } = useFireStoreContext();
    return (
        <ChatRoom sendMessage={sendMessageToGeneralRoom} messages={generalChatRoomMessages} roomId="GLOBAL ROOM"/>
    )
}
