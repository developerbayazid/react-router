import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {

    const {id} = useParams();

    const [friendData, setFriendData] = useState({});

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriendData(data))
    }, [])

    const {name, email, phone, website} = friendData;

    const friendStyle = {
        border: '1px solid purple',
        margin: '30px',
        padding: '30px',
        textAlign: 'center',
        borderRadius: '20px'
    }

    return (
        <div style={friendStyle}>
            <h1>{name} Details Page</h1>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Name: {phone}</p>
            <p>Website: {website}</p>
        </div>
    );
};

export default FriendDetails;