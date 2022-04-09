// import React from 'react';
// import { Link } from 'react-router-dom';
// import useFirebase from '../hooks/useFirebase';
// import './Header.css'
// const Header = () => {
//     const {user, handleSignOut} = useFirebase();
//     return (
//         <div className='header'>
//             <nav>
//             <Link to='/' > Home </Link>
            
//             <Link to='/register' > Register </Link>
//             <span>{ user?.displayName &&  user.displayName} 
//             </span>

//             {
//                 user?.uid ? 
//                 <button onClick={handleSignOut} > Signout </button> :
//                 <Link to='/login' > Login </Link>
//             }
//             </nav>

//         </div>
//     );
// };

// export default Header;




import { getAuth,signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';

import './Header.css'
import app from '../../firebase.init';
const auth = getAuth(app);
const Header = () => {
    const [user] = useAuthState(auth)
    return (
        <div className='header'>
            <nav>
            <Link to='/' > Home </Link>
            
            <Link to='/register' > Register </Link>
            <span>{ user?.displayName &&  user.displayName} 
            </span>

            {
                user?.uid ? 
                <button onClick={()=>signOut(auth)} > Signout </button> :
                <Link to='/login' > Login </Link>
            }
            <Link to="/orders" > Orders </Link>
            </nav>

        </div>
    );
};

export default Header;