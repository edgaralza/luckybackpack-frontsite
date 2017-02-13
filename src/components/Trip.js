import React, { Component, PropTypes } from 'react'

export default class Trip extends React.Component {
    static propTypes = {
        destination: PropTypes.string,
        id: PropTypes.number,
        startDate: PropTypes.string,
        endDate: PropTypes.string,
        image: PropTypes.string
    }
    constructor(props) {
        super(props)
    }
    render() {
        const image = {
            background: `url(${this.props.image})`
        }
        return (
            <div className='col-xs-4'>
                <div className='trip'>
                    <div className='trip__info'>
                        <h5>{this.props.destination}</h5>
                        <p>12 cities</p>
                        <p>{this.props.startDate + ' - ' + this.props.endDate}</p>
                    </div>
                </div>
            </div>
        )
    }
}
