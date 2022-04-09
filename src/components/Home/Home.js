import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
const auth = getAuth(app);
const Home = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
        This is home
        <p>current user is : {user? user.displayName : "No one is signed in"}</p>
        </div>
    );
};

export default Home;