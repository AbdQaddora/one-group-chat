import React, { useRef, useState } from 'react'
import { useAuthContext } from '../../Context/AuthContext';

import {Link , useNavigate} from 'react-router-dom'
export default function SignUpComponent() {
    const navigate = useNavigate();
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const passwordConfirmationRef = useRef(null);
    const [error, setError] = useState('');

    const { signUp } = useAuthContext();
    const handelSubmit = async (e) => {
        e.preventDefault();
        setError('');
        if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
            setError('password not matched');
            return
        }
        try {
            await signUp(emailRef.current.value, passwordRef.current.value);
            navigate("/");
        } catch (error) {
            const errorMsg = error.code.replaceAll("auth/" , "").replaceAll("-" , " ")
            setError(errorMsg);
        }
    }

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center p-md-5" style={{ minHeight: '100vh' }}>
            <div className="card bg-light p-md-5" style={{ maxWidth: "500px ", width: '100%' }}>
                <div className="card-body">
                    <h1 className='text-uppercase'>Sign Up</h1>
                    <form className='text-start' onSubmit={handelSubmit}>
                        <div className="mb-2">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" ref={emailRef} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password1" className="form-label">Password</label>
                            <input type="password" className="form-control" ref={passwordRef} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password2" className="form-label">Password Confirmation</label>
                            <input type="password" className="form-control" ref={passwordConfirmationRef} />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Sign Up</button>
                        {error && <div className="alert alert-danger w-100 mt-3 text-uppercase" role="alert">
                            {error}
                        </div>}
                        <p className='mt-2'>already have an account? <Link to='/login'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}
