import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';
import './TopicDetails.css'

const TopicDetails = () => {
    const topicsData = useLoaderData();
    const questions = topicsData.data.questions;
    console.log(questions);
    return (
        <div>
            <h1 className='topic-heading'>Quiz of {topicsData.data.name}</h1>
            {
               questions.map(quizQuestion=>
                <Questions 
                key={quizQuestion.id}
                quizQuestion={quizQuestion}
                quizNumber={questions.indexOf(quizQuestion) +1}
                > 
                </Questions>
               ) 
            }
        </div>

    );
};

export default TopicDetails;