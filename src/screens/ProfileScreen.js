import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import Nav from '../Nav';
import './ProfileScreen.css';


function ProfileScreen() {
    const user = useSelector(selectUser);
  return (
    <div className='profileScreen'>
        <Nav />
        <div className="profileScreen_body">
            <h1>Edit Profile</h1>
            <div className="profileScreen_info">
                <img src="https://occ-0-64-58.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABeLKIkjJc_qjRdxnpepqcFpyuDSbmrWuywkKfuNxVbP9SAE7shnZgNdA9RK5ITPR6oyM0ZZJuompU97WfSeORTzc8RsyUYVJo6R2.png?r=72f" alt="avatar" />
                <div className="profileScreen_details">
                    <h2>
                        {user.email}
                    </h2>
                    <div className="profileScreen_plans">
                        <button onClick={() => auth.signOut()}
                        className='profileScreen_signOut'>Sign Out</button>
                    </div>

                </div>    
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen