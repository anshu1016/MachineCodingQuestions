/* eslint-disable react/prop-types */
import { useState } from "react";
import Timer from "./Timer";

const TimerWrapper = ({ onExpire, duration }) => {
  const [hasExpired, setExpired] = useState(false);
  const onExpireHelper = () => {
    onExpire && onExpire();
    setExpired(true);
  };
  const handleRestart = () => {
    setExpired(false);
  };

  return !hasExpired ? (
    <Timer duration={duration} onExpire={onExpireHelper} />
  ) : (
    <button onClick={handleRestart}>Restart</button>
  );
};

export default TimerWrapper;
