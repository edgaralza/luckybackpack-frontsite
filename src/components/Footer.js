import React, { Component, PropTypes } from 'react'
import IndexLink from 'react-router/lib/IndexLink'
import Link from 'react-router/lib/Link'
import Ink from 'react-ink'
import logoHome from '../images/logoHome'
import skyscannerlogo from '../images/skyscanner.png'
import rome2riologo from '../images/rome2rio.png'
import expedialogo from '../images/Expedia_logo.png'
import hostelworldlogo from '../images/hostelworld.png'
import tripadvisorlogo from '../images/TripAdvisor_logo.png'

export default class Footer extends Component {
    static contextTypes = {
        router: PropTypes.object.isRequired
    }
    render() {
    	return (
    		<footer className="footer">
                <div className='row'>
                <div className='col-md-12'>
                    <p className= "legalline">(c) Lucky Backpack, Limited Liablity Company | Terms and Privacy</p>
                </div>
                </div>

            </footer>
            )
        }
  }
