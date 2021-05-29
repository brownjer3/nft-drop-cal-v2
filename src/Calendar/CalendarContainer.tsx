import { Component } from 'react'
import Search from '../Filters/Search'


class CalendarContainer extends Component {

    state = {
        date: new Date()
    }

    handleDate = (e: any) => {
        this.setState({
            date: new Date(e.target.value)
        })
    }

    render() {
        return(
            <div>
                <h3>Calendar Container</h3>
                <p>Date selected: {this.state.date.toDateString()}</p>
                <Search handleDate={this.handleDate}/>
            </div>
        )
    }

}

export default CalendarContainer
 