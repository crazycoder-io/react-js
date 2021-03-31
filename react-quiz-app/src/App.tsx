import React, {useState} from 'react';
import { fetchQuizQuestion, Difficulty, QuestionState } from './service/api';
// Components
import {QuestionCard} from './components';

const TOTAL_QUESTIONS = 10;

type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
};

const App = () => {
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState<QuestionState[]>([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);

    const startTrivia = async () => {
        try {
            setLoading(true);
            setGameOver(false);

            const newQuestions = await fetchQuizQuestion(TOTAL_QUESTIONS, Difficulty.EASY);

            setQuestions(newQuestions);
            setScore(0);
            setUserAnswers([]);
            setNumber(0);
            setLoading(false);
        } catch (error) {
            console.error(error);
            alert(error);
        }
    };

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!gameOver) {
            // User Answers
            const answer = e.currentTarget.value;
            // Check answer against correct answer
            const correct = questions[number].correct_answer === answer;
            // Add score if answer is correct
            if (correct) setScore(prev => prev + 1);
            // Save answer in the array for user answers
            const answerObject = {
                question: questions[number].question,
                answer,
                correct,
                correctAnswer: questions[number].correct_answer,
            };

            setUserAnswers(prev => [...prev, answerObject]);
        }
    };

    const nextQuestion = () => {
        // Move to the next question if it's not the last one
        const nextQuestion = number + 1;
        
        if (nextQuestion === TOTAL_QUESTIONS){
            setGameOver(true);
        } else {
            setNumber(nextQuestion);
        }
    };

    return (
        <div>
            <h1>React Quiz App</h1>
            {(userAnswers.length === TOTAL_QUESTIONS || gameOver) && (
                <button className="start" onClick={startTrivia}>Start</button>
            )}
            {!gameOver && <p className="score">Score: </p>}
            {loading && <p>Loading Questions...</p>}
            {!gameOver && !loading && (
                <QuestionCard
                    questionNumber={number + 1}
                    totalQuestions={TOTAL_QUESTIONS}
                    question={questions[number].question}
                    answers={questions[number].answers}
                    userAnswer={userAnswers ? userAnswers[number] : undefined}
                    callback={checkAnswer}
                />
            )}
            {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 && (
                <button className="next" onClick={nextQuestion}>Next Question</button>
            )}
        </div>
    );
}

export default App;
