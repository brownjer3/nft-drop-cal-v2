import { useState } from "react"


export default function Calendar() {

    const [date, setDate] = useState(new Date());

    return(
        <div>
            <h3>Calendar Container</h3>
            <div>Results starting: {date.toDateString()}</div>
            <button onClick={() => setDate(new Date('12/12/2012'))}>Change date</button>
        </div>
    )
}

 