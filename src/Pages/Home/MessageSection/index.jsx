import React from 'react'
import { useFireStoreContext } from '../../../Context/FireStoreContext'
import Message from './Message';

import './messageSection.css';

export default function MessageSection({ bottomDivRef }) {
    const { messages } = useFireStoreContext();


    return (
        <div className='container mt-3 mb-3 message-section'>
            {messages.map(el => {
                return <Message value={el.message} sender={el.uesr} />
            })}
            <div ref={bottomDivRef} style={{height:'1px'}}></div>
        </div>
    )
}
