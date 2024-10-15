import { useState } from "react";
import "./App.css";
import TimerWrapper from "./count-down-timer/TimerWrapper";

function App() {
  const onExpire = () => {
    console.log(" Expired");
  };
  return (
    <div>
      <TimerWrapper duration={20 * 1000} onExpire={onExpire} />
    </div>
  );
}

export default App;
