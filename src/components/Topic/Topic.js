import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({topic}) => {
    const {id, name, total} = topic;
    return (
        <div className='friend'>
            <h3>Name: {name}</h3>
            <p>Email: {total}</p>
            <p><small>userName: <Link to={`/topics/${id}`}>{name}</Link></small></p>
        </div>
    );
};

export default Topic;