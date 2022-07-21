import React from 'react'
import Message from './Message';
import { nanoid } from 'nanoid'

import './messageSection.css';

export default function MessageSection({ bottomDivRef , messages }) {
    return (
        <div className='container mt-3 mb-3 message-section'>
            {messages && messages.map(el => {
                return <Message value={el.message} sender={el.uesr} senderName={el.userName} key={nanoid()} />
            })}
            <div ref={bottomDivRef} style={{ height: '1px' }}></div>
        </div>
    )
}
