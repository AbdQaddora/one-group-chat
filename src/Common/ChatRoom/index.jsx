import React, { useRef, useEffect } from 'react'
import InfoHeader from './InfoHeader'
import MessageBar from './MessageBar'
import MessageSection from './MessageSection'

import './chatRoom.css'
export default function ChatRoom({messages , sendMessage , roomId}) {
    const bottomDivRef = useRef();
    const scrollToBottom = () => {
        bottomDivRef.current.scrollIntoView();
    }

    useEffect(() => {
        scrollToBottom();
    }, []);

    return (
        <div className='bg-light chat-room'>
            <InfoHeader roomId={roomId}/>
            <MessageSection bottomDivRef={bottomDivRef} messages={messages} />
            <MessageBar scrollToBottom={scrollToBottom} sendMessage={sendMessage}/>
        </div>
    )
}
