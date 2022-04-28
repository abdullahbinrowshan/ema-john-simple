import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname ||'/';

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    if (user) {
        navigate(from, {replace: true});
    }

    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    <button className='form-submit' type="submit">{
                        loading ? 'Loading...' :
                            'Login'}</button>
                </form>
                <p style={{ 'text-align': 'center' }}>

                    New to Ema-John? <Link className='form-link' to='/signup'>Create an account</Link>
                </p>
                <div className="or">
                    <p></p>
                    <h6>or</h6>
                    <p></p>
                </div>
                <div className='google-login'>
                    <button className='google-log-btn'>
                        <img src="google.png" alt="" width="35px" srcset="" />
                        <span>Continue with Google</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;