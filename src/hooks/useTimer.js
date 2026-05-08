import { useEffect, useState } from "react";

export default function useTimer(initialTimerValue = 10) {
  const [timerLeft, setTimerLeft] = useState(initialTimerValue);
  const [timerId, setTimerId] = useState(null);
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

    setTimerId(timer);

    return () => clearInterval(timer);
  }, [timerLeft]);

  const resetTimer = () => {
    setTimerLeft(initialTimerValue);
    setTimerFinised(false);
  };

  const timerStop = () => {
    clearInterval(timerId);
    setTimerId(null);
  };

  return { timerLeft, timerFinised, resetTimer, timerStop };
}
