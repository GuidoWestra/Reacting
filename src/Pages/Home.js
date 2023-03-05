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
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

        }}>
            <div>
                <Alert key="dark" variant="dark" style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "10vh",

                }}>
                    <p>
                        Ticket of the day belongs to:
                        <b>

                            {" "}{coreAms[num]}
                        </b>
                    </p>

                </Alert>

                <Button onClick={handleClick} variant="dark" style={{ width: "30vw" }}>
                    Get me a name
                </Button>

            </div>
        </div >
    )
}
