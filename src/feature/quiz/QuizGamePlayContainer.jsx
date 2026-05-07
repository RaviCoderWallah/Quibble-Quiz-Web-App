import { useState } from "react"
import QuizWelcomeScreen from "./QuizWelcomeScreen"
import GamePlayScreen from "./GamePlayScreen"

const QuizGamePlayScreen = () => {
  const [isWelcomeScreenShow, setIsWelcomeScreenShow] = useState(true)
  return (
    <div className="bg-gray-600/30 col-span-6 p-4">
      {
        isWelcomeScreenShow ? 
        <QuizWelcomeScreen setIsWelcomeScreenShow={setIsWelcomeScreenShow}/> : 
        <GamePlayScreen/> 
      }
    </div>
  )
}

export default QuizGamePlayScreen