import React, { useRef, useEffect } from 'react'
import InfoHeader from './InfoHeader'
import MessageBar from './MessageBar'
import MessageSection from './MessageSection'

import './home.css'
export default function Home() {
    const bottomDivRef = useRef();
    const scrollToBottom = () => {
        bottomDivRef.current.scrollIntoView();
    }
    useEffect(() => {
        scrollToBottom();
    }, []);
    return (
        <div className='bg-light home'>
            <InfoHeader />
            <MessageSection bottomDivRef={bottomDivRef} />
            <MessageBar scrollToBottom={scrollToBottom} />
        </div>
    )
}
