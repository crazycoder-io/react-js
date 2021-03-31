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

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

    const nextQuestion = () => {};

    return (
        <div>
            <h1>React Quiz App</h1>
            {userAnswers.length === TOTAL_QUESTIONS || gameOver && (
                <button className="start" onClick={startTrivia}>Start</button>
            )}
            {!gameOver && <p className="score">Score: </p>}
            {loading && <p>Loading Questions...</p>}
            {!gameOver && !loading && (
                <QuestionCard
                    key={number}
                    questionNumber={number + 1}
                    totalQuestions={TOTAL_QUESTIONS}
                    question={questions[number].question}
                    answers={questions[number].answers}
                    userAnswer={userAnswers ? userAnswers[number] : undefined}
                    callback={checkAnswer}
                />
            )}
            {!gameOver && !loading && (
                <button className="next" onClick={nextQuestion}>Next Question</button>
            )}
        </div>
    );
}

export default App;
