// main.jsx
import "./Main.css";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import { db } from "../firebase/firebase";
import { ref, onValue, get } from "firebase/database";
import { MyCard } from "../components/MyCard";
import { Control } from "../components/Control";
import { Sensor } from "../components/Sensor";
import { Speed } from "../components/Speed";
import { Acceleration } from "../components/Acceleration";

let t = 0;
export const Main = () => {
  const [RPM, setRPM] = useState(0);
  const [Distance, setDistance] = useState([]);
  const [speed, setSpeed] = useState([]);
  const [acceleration, setAcceleration] = useState([]);

  useEffect(() => {
    const sensorRef = ref(db, "carro/sensores");

    onValue(sensorRef, (snapshot) => {
      const sensorJSON = snapshot.toJSON();
      console.log(sensorJSON);
      setRPM(sensorJSON.encoder.rpm);

      // Calculate Distance
      const arrDistance = Distance;
      arrDistance.push({
        y:
          sensorJSON.ultrasonico.distancia < 200
            ? sensorJSON.ultrasonico.distancia
            : 0,
        x: t,
      });
      setDistance(arrDistance);

      // Calculate Speed
      const arrSpeed = speed;
      const calculateSpeed = (arr) => {
        if (arr.length <= 2) return [];
        return arr.slice(1).map((value, index) => (value - arr[index]) / 0.25);
      };
      let speeds = calculateSpeed(arrDistance.map((obj) => obj.y));

      if (speeds[speeds.length - 1]) {
        arrSpeed.push({
          y: speeds[speeds.length - 1],
          x: t,
        });
        setSpeed(arrSpeed);
      }

      // Calculate Acceleration
      const calculateAcceleration = (arr) => {
        if (arr.length <= 2) return [];
        return arr.slice(1).map((value, index) => (value - arr[index]) / 0.25);
      };
      let accelerations = calculateAcceleration(arrSpeed.map((obj) => obj.y));
      const arrAcceleration = acceleration;
      arrAcceleration.push({
        y: accelerations[accelerations.length - 1],
        x: t,
      });
      setAcceleration(arrAcceleration);

      t += 0.25;
    });
  }, []);

  return (
    <>
      <Container className="d-flex flex-column  container-main">
        <MyCard title={"Proyecto Dinámica"} />
        <div className="table-container">
          <Sensor title={"Sensores"} data={Distance} />
          <Speed title={"Velocidad"} data={speed} />
          <Acceleration title={"Aceleración"} data={acceleration} />
        </div>
      </Container>

      <footer className="footer p-2">proyecto dinámica 2023</footer>
    </>
  );
};
