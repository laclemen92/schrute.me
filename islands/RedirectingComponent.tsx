import { useEffect, useState } from "preact/hooks";
import Spinner from "@/components/Spinner.tsx";

export default function RedirectingComponent(
  { startTime, location }: { startTime: number; location: string },
) {
  const [timeLeft, setTimeLeft] = useState(startTime);

  // Reset timer when component mounts or startTime changes
  useEffect(() => {
    setTimeLeft(startTime);
  }, [startTime]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        }
        return prevTime;
      });
    }, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      globalThis.location.assign(location);
    }
  }, [timeLeft, location]);

  return (
    <div class="text-center p-6 bg-white rounded-lg shadow-md">
      <div class="text-2xl font-semibold text-gray-700 mb-4">
        {timeLeft === 0
          ? (
            <div class="flex items-center justify-center">
              <Spinner size="md" className="mr-3" />
              <span class="text-blue-600">Redirecting...</span>
            </div>
          )
          : (
            <>
              Redirecting in{" "}
              <span class="text-blue-600 font-bold text-3xl">{timeLeft}</span>
              {" "}
              {timeLeft > 1 ? "seconds" : "second"}
            </>
          )}
      </div>
      <div class="mt-4 p-3 bg-gray-50 rounded text-sm text-gray-600">
        Taking you to:{" "}
        <span class="font-mono text-xs break-all text-blue-600">
          {location}
        </span>
      </div>
    </div>
  );
}
