/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styled from "styled-components";

export const Text = styled.span`
  display: inline-block;
  font-size: 2em;
  margin: 1em 0;
`;

const Timer = ({ duration, onExpire }) => {
  const [time, setTime] = useState(duration);

  //values in MiliSeconds
  const SECOND = 1000;
  const MINUTE = 60 * SECOND;
  const HOURS = 60 * MINUTE;
  const DAY = 24 * HOURS;

  useEffect(() => {
    //updating the time.
    const timerId = setTimeout(() => {
      setTime(time - 1000);
    }, 1000);

    //break condition
    if (time <= 0) {
      onExpire && onExpire();
      clearTimeout(timerId);
    }
    //clean up operations
    return () => {
      clearTimeout(timerId);
    };
  }, [time, onExpire]);

  const getFormattedDateAndTime = (time) => {
    const days = Math.floor(time / DAY);
    const hours = Math.floor((time % DAY) / HOURS);
    const minutes = Math.floor((time % HOURS) / MINUTE);
    const seconds = Math.floor((time % MINUTE) / SECOND);

    return (
      <Text>
        {days < 10 ? `0${days}` : days} : {hours < 10 ? `0${hours}` : hours} :{" "}
        {minutes < 10 ? `0${minutes}` : minutes} :{" "}
        {seconds < 10 ? `0${seconds}` : seconds}
      </Text>
    );
  };

  return getFormattedDateAndTime(time);
};

//default parameters for timer.
Timer.defaultProps = {
  duration: 60 * 1000,
};

export default Timer;
