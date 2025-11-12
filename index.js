import { useState, useEffect } from "react";
import "./styles.css";
export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  let hour = time?.getHours();
  let minutes = time?.getMinutes();
  let seconds = time?.getSeconds();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "500px",
          height: "150px",
          backgroundColor: "grey",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <div
          style={{
            width: "470px",
            height: "130px",
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "10rem",
            fontFamily: "DS-Digital, monospace",
          }}
        >
          {hour}:{minutes}:{seconds}
        </div>
      </div>
    </div>
  );
}
