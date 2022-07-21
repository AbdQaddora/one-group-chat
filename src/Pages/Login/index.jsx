import React, { useRef, useState } from 'react'
import { useAuthContext } from '../../Context/AuthContext';

// react router
import { useNavigate, Link } from 'react-router-dom';
export default function LogIn() {
    let navigate = useNavigate();
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const rememberMeRef = useRef(null);
    const [error, setError] = useState('');

    const { login, stayLogIn, logout } = useAuthContext();
    const handelSubmit = async (e) => {
        logout();
        e.preventDefault();
        setError('');
        try {
            await login(emailRef.current.value, passwordRef.current.value);
            if (rememberMeRef.current.value) {
                stayLogIn()
            }
            navigate("/");
        } catch (error) {
            const errorMsg = error.code.replaceAll("auth/", "").replaceAll("-", " ")
            setError(errorMsg);
        }
    }

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center p-md-5" style={{ minHeight: '100vh' }}>
            <div className="card bg-light p-md-5" style={{ maxWidth: "500px ", width: '100%' }}>
                <div className="card-body">
                    <h1 className='text-uppercase'>Login</h1>
                    <form className='text-start' onSubmit={handelSubmit}>
                        <div className="mb-2">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" ref={emailRef} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" ref={passwordRef} required />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Login</button>
                        {error && <div className="alert alert-danger w-100 mt-3" role="alert">
                            {error}
                        </div>}
                        <div className="mt-2">
                            <input className="form-check-input" type="checkbox" id="remember-me" ref={rememberMeRef} />
                            <label className="form-check-label ms-2" htmlFor="flexCheckChecked">
                                Remember me
                            </label>
                        </div>
                        <p className='mt-2'>don't have an account yet? <Link to='/signup'>Sign Up</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}
