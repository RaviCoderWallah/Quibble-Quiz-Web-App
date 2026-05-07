import { useContext } from "react"
import { QuizContext } from "../context/QuizContext"

export default function useQuiz(){
    const context = useContext(QuizContext);
    if(!context){
        throw new Error("QuizProvided must be wrapped in your main Componenet.")
    }
    return context;
}