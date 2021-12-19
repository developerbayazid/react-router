import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const {name, email, id} = props.friend;
    const friendStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '30px'
    }

    const navigate = useNavigate();

    const friendDetailsHandler = (id) => {
        navigate(`/friend/${id}`)
    }
    return (
        <div style={friendStyle}>
            <h2>{name}</h2>
            <h4>{email}</h4>
            <button onClick={()=> friendDetailsHandler(id)}>Show Friend Details</button>
        </div>
    );
};

export default Friend;