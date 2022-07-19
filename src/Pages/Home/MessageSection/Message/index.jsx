import React from 'react'
import { useAuthContext } from '../../../../Context/AuthContext'
import { direction } from 'direction'

export default function Message({ value, sender, senderName }) {
    const { user } = useAuthContext();
    return (
        <div className={`w-100 d-flex flex-column mt-2`}>
            <div className={` ${sender === user.uid ? 'bg-primary text-white text-end p-1' : 'bg-white p-2'}  pb-0 rounded`}
                style={{
                    width: 'fit-content',
                    alignSelf: sender === user.uid ? 'flex-end' : 'flex-start',
                    maxWidth: "80%"
                }}>
                {sender !== user.uid && <p>{senderName}</p>}
                <p className={`${sender !== user.uid ? 'bg-light p-2' : ' p-1 pb-0 mb-2'} rounded`}
                    dir={direction(value.toString())}>
                    {value}
                </p>
            </div>
        </div>
    )
}

