import React from 'react';
// import { Link } from 'react-router-dom';
// import './Topic.css'
const Questions = ({quizQuestion}) => {
    const {id,correctAnswer,options, question
    } = quizQuestion;

    console.log(options)
    console.log(quizQuestion)

    function removeTags(str) {
        if ((str===null) || (str===''))
        return false;
        else
        str = str.toString();
        return str.replace( /(<([^>]+)>)/ig, '');
     }
     const removeTagQuestion= removeTags(question)
    
    return (
           
           <div className="qsn_container">
            <p>{id}</p>
                <p>Qusetion: {removeTagQuestion} </p>
                <div>
                    <h4>a. {options[0]}</h4>
                    <h4>b. {options[1]}</h4>
                    <h4>c. {options[2]}</h4>
                    <h4>d. {options[3]}</h4>
                </div>
                <h5>Answer: {correctAnswer}</h5>
            

           </div>
            
    
    );
};

export default Questions;