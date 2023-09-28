// main.jsx 
import "./Main.css"
import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"

import { db } from "../firebase/firebase"
import { getDatabase, ref, onValue } from "firebase/database";

export const Main = () => {

    const [RPM, setRPM] = useState(0); 
         
    
    

    useEffect(() => {        
         // const ref = db.ref('server/saving-data/fireblog/posts');
         const starCountRef = ref(db, '/carro/sensores/encoder/rpm'); 

        return onValue(starCountRef, (snapshot) => {
                
            const data = snapshot.val();
            console.log(snapshot)
        });
   

    
    }, [])
    return(
        <>
        <Container className="mt-3">
            <h1>Recolección de datos</h1>
            <Container>
                <strong>RPM: </strong> { RPM }
            </Container>
        </Container>

        <footer className="footer p-2">
            proyecto dinámica 2023
        </footer>
        </>
    )
}