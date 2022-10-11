import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Topic from '../Topic/Topic';
import './Topics.css'

const Topics = () => {
    const topicsData = useLoaderData();
    const topics= topicsData.data;
    return (
        <div className='topic_container_full'>
            <Header></Header>
            <div className="topic_container">
                {
                    topics.map(topic => <Topic
                        key={topic.id}
                        topic={topic}
                    ></Topic>)
                }
            </div>
        </div>
    );
};

export default Topics;