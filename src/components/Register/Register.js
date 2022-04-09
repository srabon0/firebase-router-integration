import React from 'react';
import './Register.css';

const Register = () => {
    return (
        <div className='form' >
            <form >
                <input type="text" placeholder='your name' /> <br />
                <input type="email" placeholder='your email' /> <br />
                <input type="password" placeholder='password' /> <br />
                <button type='submit'> Register </button>
               
            </form>
        </div>
    );
};

export default Register;