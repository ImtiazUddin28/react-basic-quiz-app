import React from 'react';
import "./Questions.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Questions = ({quizQuestion,quizNumber}) => {
    const {correctAnswer,options, question
    } = quizQuestion;
   
    const correct = (optionNum)=> {
        if (optionNum===correctAnswer){
            toast.success('Your Answer is Correct.', {
                position: toast.POSITION.TOP_CENTER
            });
            const optionId = document.getElementById(optionNum);
            optionId.style.backgroundColor= "green";
        }
        else{
            toast.success('Your Answer is Not Correct.', {
                position: toast.POSITION.TOP_CENTER
            });
            const optionId = document.getElementById(optionNum);
            optionId.style.backgroundColor= "red";
        }
    }

    const eyeAns=()=> {
        toast.success(`Answer: ${correctAnswer}`, {
            position: toast.POSITION.TOP_CENTER
        });
    }
    function removeTags(str) {
        if ((str===null) || (str===''))
        return false;
        else
        str = str.toString();
        return str.replace( /(<([^>]+)>)/ig, '');
     }
     const removeTagQuestion= removeTags(question)
    
    return (
           
           <div className="quiz_container">
                <h3>Quiz {quizNumber}: {removeTagQuestion} </h3>
               
                    <div onClick={()=>eyeAns()} className="answer">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7apsKH-TMjHjjUcquPLllqhs1teB9jaYUn1-yh8x-_Q&s" alt="" />
                    </div>
                    <div className="options_container">
                        
                        <div className="option" id={options[0]} onClick={()=>correct(options[0])}>
                            <input type="radio" name="fav_language" value="CSS"/>
                            <label>{options[0]}</label>
                        </div>
                        <div className="option" id={options[1]} onClick={()=>correct(options[1])}>
                            <input type="radio"  name="fav_language" value="CSS"/>
                            <label >{options[1]}</label>
                        </div>
                        <div className="option" id={options[2]} onClick={()=>correct(options[2])}>
                            <input type="radio"  name="fav_language" value="CSS"/>
                            <label >{options[2]}</label>
                        </div>
                        <div className="option" id={options[3]} onClick={()=>correct(options[3])}>
                            <input type="radio"  name="fav_language" value="CSS"/>
                            <label>{options[3]}</label>
                        </div>
                        
                        
                    </div>
                        
                
                <ToastContainer /> 
           </div>
            
    
    );
};

export default Questions;