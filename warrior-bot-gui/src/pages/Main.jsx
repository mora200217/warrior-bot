// main.jsx 
import "./Main.css"
import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"

import { db } from "../firebase/firebase"
import { ref, onValue, get} from "firebase/database";
import { MyCard } from "../components/MyCard";
import { Control } from "../components/Control";
import { Sensor } from "../components/Sensor";

let t = 0; 
export const Main = () => {

    const [RPM, setRPM] = useState(0); 
    const [Distance, setDistance] = useState([]); 
         
    useEffect(() => {        
         const sensorRef = ref(db, "carro/sensores"); 

        onValue(sensorRef, (snapshot) => {
            const sensorJSON = snapshot.toJSON(); 
            console.log(sensorJSON); 

            setRPM(sensorJSON.encoder.rpm); 
            const arr = Distance; 
            arr.push({y: sensorJSON.ultrasonico.distancia, x: t}); 
            console.log(arr)
            setDistance(arr); 
            t++; 
        })
    }, [])

    return(
        <>
        <Container className="d-flex flex-column  container-main">
            <MyCard title = {"Proyecto Dinámica"} />
            <div className="d-flex ">
                <Sensor title = { "Sensores" } data = { Distance }/> 
                <Control title = { "Controles"}/>
            </div>
        </Container>    

        <footer className="footer p-2">
            proyecto dinámica 2023
        </footer>
        </>
    )
}