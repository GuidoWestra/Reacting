import React, { useEffect, useState } from 'react'
import '../App.css';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';


export default function Home() {
    const [num, setNum] = useState(0);

    let coreAms = ["Guido", "Urs", "Remy", "Sjoerd"];

    const handleClick = () => {
        setNum(num + 1);
        if (num === 3) {
            setNum(0)
            console.log('settingNum to 0')
        }
    };

    useEffect(() => {
    }, [num])

    return (
        <div >
            <div>
                <Alert key="dark" variant="dark">
                    {coreAms[num]}
                </Alert>



                <Button onClick={handleClick} variant="dark">Get me a name</Button>
            </div>
        </div >
    )
}
