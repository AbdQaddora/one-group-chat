import React, { useRef, useState } from 'react'
import { useAuthContext } from '../../Context/AuthContext'
import './home.css'
import { Link, useNavigate } from 'react-router-dom'
import RoomByIDModal from './RoomByIDModal';
export default function Home() {
    const navigate = useNavigate();
    const { user, logout } = useAuthContext();
    const [showModal, setShowModal] = useState(false);
    const roomIdInputRef = useRef(null);

    const joinRoom = (e) => {
        // todo: check if room id not valid
        e.preventDefault()
        setShowModal(false);
        console.log(roomIdInputRef.current.value);
        navigate(`/room/${roomIdInputRef.current.value}`);
    }
    return (
        <>
            <div className="container-fluid d-flex justify-content-center align-items-center p-md-5" style={{ minHeight: '100vh' }}>
                <div className="card bg-light p-md-5" style={{ maxWidth: "500px ", width: '100%' }}>
                    <div className="card-body ">
                        <p><b className='text-uppercase'>welcome</b> {user.email}</p>
                        <Link to="/general">
                            <button className="btn btn-success w-100 text-uppercase">One Chat For All World</button>
                        </Link>
                        <Link to="/new-room">
                            <button className="btn btn-primary mt-2 w-100 text-uppercase">New Chat Room</button>
                        </Link>
                        <button className="btn btn-primary mt-2 w-100 text-uppercase" onClick={() => setShowModal(true)}>join room by id</button>
                        <Link to='/login'>
                            <button className="btn btn-danger mt-2 w-100 text-uppercase" onClick={logout}>Log Out</button>
                        </Link>
                    </div>
                </div>
            </div >
            <RoomByIDModal showModal={showModal} error={false} roomIdInputRef={roomIdInputRef} joinRoom={joinRoom} />
        </>
    )
}
