import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'
export default function InfoHeader({ roomId }) {
    return (
        <div className='w-100 bg-white'>
            <div className='container p-1 d-flex justify-content-between align-items-center p-2'>
                <p className='fs-5 mb-0'>ROOM ID : {roomId}</p>
                <Link to="/">
                    <button className='fs-4 border-0 bg-transparent'><HiOutlineArrowNarrowRight /></button>
                </Link>
            </div>
        </div>
    )
}
