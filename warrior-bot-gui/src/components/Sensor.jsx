
import { Doughnut, Scatter } from "react-chartjs-2";




import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  import faker from 'faker';
import { useEffect, useState } from "react";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );


export const options = {
    responsive: true,
    plugins: {
    
      title: {
        display: true,
        text: 'RPM',
      },
    },
  };
  
  const labels = new Array(1000).map((e, idx) => idx + 1);



  
export const Sensor = (props) => {

    const [myData, setData] = useState([{x: 0, y: 3}]); 

    useEffect(()=> {
        setData(props.data)
    }, [props])
    const data = {
    
        datasets: [
          {
            showLine: true,
            label: 'Dataset 1',
            data: myData,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          
        ],
      };

    return(
        <div className="card-design p-3 px-4 w-50">
        <h4> Sensores </h4>        
        {/* Controles */}
        
        
        <Scatter options={options} data={data} />;
        
        
    </div>
    )
}