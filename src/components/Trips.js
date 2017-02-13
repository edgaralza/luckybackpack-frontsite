import React, { Component, PropTypes } from 'react'
import Trip from './Trip'
import { formatDescription } from '../utils/formatUtils'

export default class Trips extends React.Component {
    static propTypes = {
        trips: PropTypes.array.isRequired
    }
    renderHeader() {
        if (this.props.trips.length === 0) {
            return (
                <div className='row'>
                    <p>No Trips Found</p>
                </div>
            )
        }

        return (
            <div className='row'>
                <p>{formatDescription('Existing Trip', this.props.trips.length)}</p>
            </div>
        )
    }
    render() {
        return (
            <div className='flex column'>
                {this.renderHeader()}
                <div className='row grid'>
                    {
                        this.props.trips.map(trip => {
                            return React.createElement(Trip, {
                                destination: trip.destination,
                                cities: trip.cities,
                                startDate: trip.startDate,
                                endDate: trip.endDate,
                                image: trip.image
                            })
                        })
                    }
                </div>
            </div>
        )
    }
}
