import React from 'react'

// css
import './roomByIDModal.css'
export default function RoomByIDModal({ roomIdInputRef, error, showModal , joinRoom }) {
    return (
        <div className={`modal-overlay ${showModal ? 'show-modal' : ''}`}>
            <form onSubmit={joinRoom} className='my-modal-card p-4 bg-white rounded-1'>
                <h3 className='fs-5 text-uppercase mb-3'>Enter Room ID to join it</h3>
                <input type="text" className={`form-control ${error ? 'error-input' : ''}`} placeholder='Room ID'
                    ref={roomIdInputRef} />
                <button className='btn btn-primary w-100 mt-2'>JOIN</button>
            </form>
        </div>
    )
}
