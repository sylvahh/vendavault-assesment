import React from 'react';

const useCountdown = (coundtdown: number): [count: number, reset: () => void] => {
  const [counter, setCounter] = React.useState(coundtdown);
  const reset = () => {
    setCounter(coundtdown);
  };
  React.useEffect(() => {
    if (counter > 0) {
      const countIntervalId = setInterval(() => {
        setCounter((prev) => prev - 1);
      }, 1000);

      return () => {
        clearInterval(countIntervalId);
      };
    }
  }, [coundtdown, counter]);
  return [counter, reset];
};

export default useCountdown;
