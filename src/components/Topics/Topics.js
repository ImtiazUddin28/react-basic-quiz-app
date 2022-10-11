import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const topicsData = useLoaderData();
    const topics = topicsData.data
    return (
        <div>
             <h2>I have so many Friends.YAY: {topics.length}</h2>
            {
                topics.map(topic => <Topic
                    key={topic.id}
                    topic={topic}
                ></Topic>)
            }
        </div>
    );
};

export default Topics;