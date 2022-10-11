import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TopicDetails = () => {
    const topicsData = useLoaderData();
    const topic = topicsData.data;
    console.log(topic.questions[0].correctAnswer
        )
    return (
        <div>
            <h1>Details About: {topic.name}</h1>
            <p>Call him/her: {topic.total}</p>
            <h2>Everything you need to know about this person</h2>
        </div>

    );
};

export default TopicDetails;