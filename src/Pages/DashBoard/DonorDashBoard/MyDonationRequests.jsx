import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Authentication/Auth/AuthContext';

const MyDonationRequests = () => {

    const {user} = useContext(AuthContext) ;
    
    
        const [recent , setRecent] = useState([]) ;
        useEffect(()=> {
            fetch(`http://localhost:3000/all-requests?userEmail=${user?.email}`)
            .then(res => res.json())
            .then(data => setRecent(data))
            .catch(err => {
                console.log('error happaneded in getting latest Recent Donation Requests :', err.message) ;
            })
            } , [user?.email])
            console.log('Recent Donation Reqs: ', recent) ;


    return (
        <div>
            <title>My Donation Requests</title>
            <h4 className='text-black'>ghjg</h4>
        </div>
    );
};

export default MyDonationRequests;