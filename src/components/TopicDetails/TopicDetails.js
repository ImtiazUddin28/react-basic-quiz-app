import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const TopicDetails = () => {
    const topicsData = useLoaderData();
    const questions = topicsData.data.questions;
    console.log(questions);
    return (
        <div>
            {
               questions.map(quizQuestion=>
                <Questions key={quizQuestion.id}
                quizQuestion={quizQuestion}>    
                </Questions>
               ) 
            }
        </div>

    );
};

export default TopicDetails;