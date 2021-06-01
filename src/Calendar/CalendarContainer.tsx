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

    localizeDate = (date: Date) => {
        const timezoneOffset = date.getTimezoneOffset() * 60000
        const local = date.getTime() + timezoneOffset
        return new Date(local)
    }

    handleDateFilter = (e: any) => {
        const dateInput = new Date(e.target.value)
        const localDate = this.localizeDate(dateInput)
        this.setState({
            date: localDate
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
                <Search handleDateFilter={this.handleDateFilter} handleSearch={this.handleSearch} />
                <EventsTable events={this.state.events}/>
            </div>
        )
    }

}

export default CalendarContainer
 