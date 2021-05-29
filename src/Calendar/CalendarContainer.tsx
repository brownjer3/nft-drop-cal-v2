import { Component } from 'react'


class CalendarContainer extends Component {

    state = {
        date: new Date()
    }

    handleDate = (e: any) => {
        let date = new Date(e.target.value)
        this.setState({
            date: new Date(date)
        })
    }


    render() {
        return(
            <div>
                <h3>Calendar Container</h3>
                <p>Date selected: {this.state.date.toDateString()}</p>
                <input type='date' onChange={this.handleDate}/>
            </div>
        )
    }

}

export default CalendarContainer
 