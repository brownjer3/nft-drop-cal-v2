
const EventsTable = (props: any) => {

    
    return(
        <div>
            {props.events.map((e: any) => <h1>{e.title}</h1>)}
        </div>
    )

}

export default EventsTable