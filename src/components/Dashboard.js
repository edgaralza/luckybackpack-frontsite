import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Trips from './Trips'
import User from './User'

class Dashboard extends Component {
    static propTypes = {

    }
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='dashboard'>
                <div className='dashboard__banner' />
                <div className='dashboard__body row'>
                    <User user={this.props.user} />
                    <Trips trips={this.props.trips} />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        trips: state.trips.trips,
        user: state.user
    }
}

export default connect(mapStateToProps)(Dashboard)