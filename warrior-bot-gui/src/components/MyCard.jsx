import { useEffect, useState } from "react"
import "./card.css"
import { Badge } from "react-bootstrap";

export const MyCard = (props) => {
    const [title, setTitle] = useState( "No title"); 

    useEffect(()=> {
        setTitle(props.title)
    }, [props.title])

    return ( 
        <div className="card-design p-3 px-4">
            <h4> <Badge className="bg-dark"> {title}  </Badge>  </h4>  
            Este no es un proyecto cualquiera, es el fabuloso proyecto de Dinámica grupo 3. Un 10 en este proyecto se queda corto antela magnificencia de la información que acá se encuentra presentada. La nota perfecta para este trabajo no la encontrarás en las respuesta que te demos, sino en tu corazón.
        </div>
    )
}