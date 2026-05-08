import { useState } from "react";

export default function useScore(points = 5) {
  const [score, setScore] = useState(0);
  const [initialLifeLine, setInitialLifeLine] = useState(3);

  const increaseScore = () => {
    setScore((prevScore) => prevScore + points);
  };

  const skipCharge = () => {
    if (score >= 10) {
      setScore((prevScore) => prevScore - 10); //Skip plenalty = 10 points
    }
  };

  const lifeline = () => {
    if (initialLifeLine !== 0) {
      setInitialLifeLine((prev) => prev - 1);
    } else {
      if (score >= 5) {
        setScore((prevScore) => prevScore - 5);
      }
    }
  };

  return { score, initialLifeLine, increaseScore, skipCharge, lifeline };
}
