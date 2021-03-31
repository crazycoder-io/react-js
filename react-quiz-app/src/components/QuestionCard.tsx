import React from 'react';

type Props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any;
    questionNumber: number;
    totalQuestions: number;
};

const QuestionCard: React.FC<Props> = (props) => {
    const {
        question, 
        answers, 
        callback, 
        userAnswer, 
        questionNumber, 
        totalQuestions
    } = props;
    return (
        <div>
            <p className="number">Question: {questionNumber} / {totalQuestions}</p>
            <p dangerouslySetInnerHTML={{ __html: question }} />
            <div className="answers">
                {answers.map(answer => (
                    <div key={answer}>
                        <button disabled={userAnswer} value={answer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{ __html: answer }} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default QuestionCard
