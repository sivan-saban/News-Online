import { useEffect, useState } from "react";
import "./Clock.css";

function Clock(): JSX.Element {

    const [time, setTime] = useState<string>("Clock...");
    const [date, setDate] = useState<string>("Date..");

    useEffect(() => {

        const date = new Date();

        const day = date.getDate();
        const month = date.getMonth() + 1; // Months are zero-based
        const year = date.getFullYear();
        setDate(`${day}/${month}/${year}`);

        // Create timer once when component loads:
        const timerId = setInterval(() => {
           const now = new Date();
            setTime(now.toLocaleTimeString());
            console.log(now.toLocaleTimeString());
        }, 1000);

        // Returning a function which will be invoked when the component unmount (destroyed):
        return () => {
            // Close the timer:
            clearInterval(timerId);
        };

    }, []); 

    function updateClock(hours: number, minutes: number, seconds: number): void {
        const hourDegrees = hours * 30;
        const minuteDegrees = minutes * 6;
        const secondDegrees = seconds * 6;

        const hourHand = document.querySelector('.hour-hand') as HTMLElement;
        const minuteHand = document.querySelector('.minute-hand') as HTMLElement;
        const secondHand = document.querySelector('.second-hand') as HTMLElement;
        if (hourHand && minuteHand && secondHand) {
          hourHand.style.transform = `rotate(${hourDegrees}deg)`;
          minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
          secondHand.style.transform = `rotate(${secondDegrees}deg)`;
        }
      }
      
      setClockWithCurrentTime();
      
      function setClockWithCurrentTime(): void {
        const date = new Date();
      
        const hours = ((date.getHours() + 11) % 12 + 1);
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
      
        updateClock(hours, minutes, seconds);
      }
      
      setInterval(setClockWithCurrentTime, 1000);
      
      

    return (
        <div className="Clock">
            <h2 className="clockSpan">{time}</h2>
            <br/>
            <div className="clock">
                <div className="hour-hand"></div>
                <div className="minute-hand"></div>
                <div className="second-hand"></div>
            </div>
        </div>
    );

}

export default Clock;
