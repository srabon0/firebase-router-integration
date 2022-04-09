import React from 'react';
import useFirebase from '../hooks/useFirebase';
import './Login.css'
const Login = () => {
    const {signinwithgoogle}=useFirebase();
        return (
        <div className='form' >
            <div>
                <button onClick={signinwithgoogle} >sign in with google</button>
            </div>
            <form >
             
                <input type="email" placeholder='your email' /> <br />
                <input type="password" placeholder='password' /> <br />
                <button type='submit'> sign in </button>
               
            </form>
        </div>
    );
};

export default Login;