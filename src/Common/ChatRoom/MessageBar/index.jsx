import React, { useRef } from 'react'
import { IoIosSend } from 'react-icons/io'
export default function MessageBar({ scrollToBottom  , sendMessage}) {
    const messageInputRef = useRef(null);

    const handelSendMessage = async (e) => {
        e.preventDefault();
        if (messageInputRef.current.value !== '') {
            try {
                await sendMessage(messageInputRef.current.value)
                scrollToBottom();
                messageInputRef.current.focus();   
            } catch (error) {
                console.log(error);
            }
            messageInputRef.current.value = '';
        }
    }
    return (
        <div className='w-100'>
            <form className='container mb-3' onSubmit={handelSendMessage}>
                <div className="input-group input-group-lg">
                    <input type="text" className="form-control" placeholder="Message" ref={messageInputRef} />
                    <button className="input-group-text " id="basic-addon1">
                        <IoIosSend className='mt-1 ms-1 text-primary fs-2' />
                    </button>
                </div>
            </form>
        </div>
    )
}
