import React, { useEffect, useState } from 'react'
import '../App.css';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';


export default function Home() {
    let coreA = ["Guido", "Urs", "Remy", "Sjoerd" ];
    const [num, setNum] = useState(0);  

    const handleClick = () => {
        console.log('hi')
        setNum(num+1);
    };
    
    useEffect(() => {    
        console.log('Incrementing to',num)

    }, [num])
    
    return (
        <div >
            <div>
                <Alert key="dark" variant="dark">
                    {coreA[num]}
                </Alert>



                <Button onClick={handleClick} variant="dark">Dark</Button>
            </div>
        </div >
    )
}
