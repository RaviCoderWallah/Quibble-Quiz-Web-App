import { useState } from "react";

export default function useQuizCurrentQuestion(data) {
    const [currentQuestionData, setCurrentQuestionData] = useState(0);
    
    const question = data[currentQuestionData]?.question;
    const options = data[currentQuestionData]?.options;
    const answer = data[currentQuestionData]?.answer;
    const explanation = data[currentQuestionData]?.explanation;

    return {question, options, answer, explanation, currentQuestionData, setCurrentQuestionData}
}