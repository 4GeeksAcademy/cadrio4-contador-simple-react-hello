import { useState, useEffect } from "react";
import "../../styles/index.css"


const SecondsCounter = () => {
  const [seconds, setSeconds] = useState(0);
  const [alertTime, setAlertTime] = useState("");


  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);


  useEffect(() => {
    if (alertTime !== "" && seconds === Number(alertTime)) {
      alert(` All those moments will be lost in time, like tears in rain. ${alertTime} seconds`);
    }
  }, [seconds, alertTime]);

  const reiniciarSegundero = () => setSeconds(0);

  const digitOne = seconds % 10;
  const digitTwo = Math.floor(seconds / 10) % 10;
  const digitThree = Math.floor(seconds / 100) % 10;
  const digitFour = Math.floor(seconds / 1000) % 10;



  return (
    <div className="counter-container mt-5">
      <div className="bigCounter">
        <div className="box icon">
          <i className="fa-regular fa-clock"></i>
        </div>

        <div className="box">{digitFour}</div>
        <div className="box">{digitThree}</div>
        <div className="box">{digitTwo}</div>
        <div className="box">{digitOne}</div>
      </div>

      <div className="bigCounter" style={{ marginTop: "20px" }}>
        <input type="number" value={alertTime} onChange={(e) => setAlertTime(e.target.value)} />
      </div>

      <button className="digital-btn mt-3" onClick={reiniciarSegundero}>
        RESET
      </button>

    </div>

  );
};

export default SecondsCounter;

