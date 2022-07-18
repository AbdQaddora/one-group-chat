import React from 'react'
import { useAuthContext } from '../../../../Context/AuthContext'
import { nanoid } from 'nanoid'
export default function Message({ value, sender }) {
    const { user } = useAuthContext()
    return (
        <p className={`w-100 ${sender == user.uid ? 'text-end' : 'text-start'} pt-1`}
            key={nanoid()}>
            <span className={` ${sender == user.uid ? 'bg-primary text-white' : 'bg-white'} p-2 rounded`}>
                {value}
            </span>
        </p>
    )
}
