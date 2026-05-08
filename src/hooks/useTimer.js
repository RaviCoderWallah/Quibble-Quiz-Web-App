import { useEffect, useState } from "react";

export default function useTimer(initialTimerValue = 10) {
  const [timerLeft, setTimerLeft] = useState(initialTimerValue);
  const [timerFinised, setTimerFinised] = useState(false);

  useEffect(() => {
    if (timerLeft <= 0) {
      //If timer reach zero then timer finised
      setTimerFinised(true);
      return;
    }

    const timer = setInterval(() => {
      setTimerLeft((prev) => prev - 1); //Timer decrease by one seconds
    }, 1000);

    return () => clearInterval(timer);
  }, [timerLeft]);

  const resetTimer = () => {
    setTimerLeft(initialTimerValue);
    setTimerFinised(false);
  };

  return { timerLeft, timerFinised, resetTimer };
}
