import React from 'react'
import { useAuthContext } from '../../../Context/AuthContext'
import { GoKebabVertical } from 'react-icons/go'
export default function InfoHeader() {
    const { user } = useAuthContext();
    return (
        <div className='w-100 bg-white'>
            <div className='container p-1 d-flex justify-content-between align-items-center p-2'>
                <p className='fs-5 mb-0'>{user.email}</p>
                <button className='fs-4 border-0 bg-transparent'><GoKebabVertical /></button>
            </div>
        </div>
    )
}
