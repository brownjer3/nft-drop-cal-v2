import { Component } from 'react'
import Search from '../Filters/Search'


class CalendarContainer extends Component {

    state = {
        date: new Date(), 
        search: ""
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
            </div>
        )
    }

}

export default CalendarContainer
 