import React, {useEffect, useState} from 'react'


export default function Seat(props) {
    let [status, setStatus] = useState([{status: "ready"}]);
    status = 'ready'
    
    useEffect(() => {
        setStatus({status:'booked'})        
    },[])

    // const changeStatus = () => {
    //     status = 'booked'
    // }

    return (
        <div>
            <div className={`seat mt-2 ${status}`}>
                <p className="pt-2" onClick={setStatus}>{props.value}</p>
            </div>
           
        </div>
    )
}
