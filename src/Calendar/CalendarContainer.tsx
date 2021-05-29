import { Component } from 'react'
import Search from '../Filters/Search'
import EventsTable from '../Events/EventsTable'


class CalendarContainer extends Component {

    state = {
        date: new Date(), 
        search: "", 
        events: [
            {id: "1", title: "title1", desc: "desc1"},
            {id: "2", title: "title2",desc: "desc2"},
            {id: "3", title: "title3",desc: "desc3"}
        ]
    }

    handleDate = (e: any) => {
        this.setState({
            date: new Date(e.target.value)
        })
    }

    handleSearch = (e: any) => {
        this.setState({
            search: e.target.value
        })
    }

    render() {
        return(
            <div>
                <h3>Calendar Container</h3>
                <p>Date selected: {this.state.date.toDateString()}</p>
                <p>Search term: {this.state.search}</p>
                <Search handleDate={this.handleDate} handleSearch={this.handleSearch} />
                <EventsTable events={this.state.events}/>
            </div>
        )
    }

}

export default CalendarContainer
 