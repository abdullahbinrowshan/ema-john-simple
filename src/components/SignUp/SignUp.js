import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './SignUp.css';

const SignUp = () => {
    const [email, setEmail ] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading
      ] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    if (user) {
        navigate('/')
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if(password !== confirmPassword){
            setError("Your two passwords did't match");
            return;
        }
        if (password.length < 6) {
            setError('Password must be 6 characters or longer')
            return;
        }

        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" required />
                    </div>
                    <p style={{color: 'red'}}>{error}</p>
                    <button className='form-submit' type="submit">Sign up</button>
                </form>
                <p style={{'text-align': 'center'}}>
                    Already have an account? <Link className='form-link' to='/login'>Login</Link>
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

export default SignUp;