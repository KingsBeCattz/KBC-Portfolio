import { useEffect, useState } from "react";
import "./DigitalClock.css";

export default function DigitalClock({ center }: { center: unknown; }) {
  const [date, setDate] = useState(new Date());
  const [elipsis, setElipsis] = useState(":");

  useEffect(() => {
    const interval = setInterval(() => {
      elipsis === ":" ? setElipsis(" ") : setElipsis(":");
      setDate(new Date());
    }, 500);
    return () => clearInterval(interval);
  }, [elipsis]);

  return (
    <div className="clock-frame" style={center ? { margin: "auto" } : {}}>
      <div className="clock">
        <div className="date">
          <div className="background">8888-88-88</div>
          <div className="date-content">
            {date.getFullYear().toString()}-{(date.getMonth() + 1).toString().padStart(2, '0')}-{date.getDate().toString().padStart(2, '0')}
          </div>
        </div>
        <div className="time">
          <div className="background">
            88:88<span className="seconds background">88</span>
          </div>
          <div className="time-content">
            {date.getHours().toString().padStart(2, '0')}{elipsis}{date.getMinutes().toString().padStart(2, '0')}
            <span className="seconds">{date.getSeconds().toString().padStart(2, '0')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}