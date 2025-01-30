import { useEffect, useState } from "preact/hooks";

export default function RedirectingComponent({ startTime, location }: { startTime: number; location: string; }) {
  const [timeLeft, setTimeLeft] = useState(startTime);
  const [redirectLocation] = useState(location);

  setInterval(() => {
    if (timeLeft > 0) {
      setTimeLeft(timeLeft - 1);
    }
  }, 1000);

  useEffect(() => {
    if (timeLeft === 0) {
      globalThis.location.href = redirectLocation;
    }
  }, [timeLeft]);


  return (
    <div>
      {timeLeft === 0 ? 'Redirecting...' : `Redirecting in ${timeLeft} ${timeLeft > 1 ? 'seconds' : 'second'}`}
    </div>
  );

}
