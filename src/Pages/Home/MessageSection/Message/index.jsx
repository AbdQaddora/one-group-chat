import React from 'react'
import { useAuthContext } from '../../../../Context/AuthContext'
import { nanoid } from 'nanoid'

export default function Message({ value, sender, senderName }) {
    const { user } = useAuthContext()
    return (
        <div className={`w-100 d-flex flex-column pt-1`}
            key={nanoid()}>
            <p className={` ${sender === user.uid ? 'bg-primary text-white text-end p-2' : 'bg-white p-3'}  rounded`}
                style={{
                    width: 'fit-content',
                    alignSelf: sender === user.uid ? 'flex-end' : 'flex-start',
                    maxWidth: "80%"
                }}>
                {sender !== user.uid && <p>{senderName}</p>}
                <span className={`${sender !== user.uid && 'bg-light'} p-2 rounded`} dir={direction(value)}>
                    {value}
                </span>
            </p>
        </div>
    )
}

