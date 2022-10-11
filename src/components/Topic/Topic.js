import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css'
const Topic = ({topic}) => {
    const {id, name,logo, total} = topic;
    return (
            <div className='topic'>
                <img className='topic-img' src={logo} alt="" />
                <div className="topic_description">
                    <h3>Test Your {name} Skills</h3>
                    <p>questions: {total}</p>
                    <button><Link className='btn-link' to={`/topics/${id}`}>Start Test</Link></button>
                </div>
            </div>
    
    );
};

export default Topic;