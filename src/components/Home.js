import React, { Component } from 'react'
import Button from './Button'
import Footer from './Footer'
import banner from '../images/banner'
import transportation from '../images/transportation'
import lodging from '../images/lodging'
import events from '../images/events'
import dataStudy from '../images/dataStudy'
import logoHome from '../images/logoHome'
import skyscannerlogo from '../images/skyscanner.png'
import rome2riologo from '../images/rome2rio.png'
import expedialogo from '../images/Expedia_logo.png'
import hostelworldlogo from '../images/hostelworld.png'
import tripadvisorlogo from '../images/TripAdvisor_logo.png'
import IndexLink from 'react-router/lib/IndexLink'
import Link from 'react-router/lib/Link'

function goToSurvey() {
    window.open('https://www.surveymonkey.com/r/luckybackpacksurvey')
}

export default function Home(props) {
    return (
        <div className='home'>
            <section className='home__landing column'>
                <h2 className="home_header_title " > Lucky Backpack</h2>
                <h4>Optimized travel to Europe coming soon</h4>
                <a href="http://eepurl.com/bMXxlr "className="homebuttonlink">Stay Informed</a>
            </section>

            <section className='home__about column'>
                <h3 className="text-center">Personalized Travel Solutions in Seconds</h3>
                <div className='row'>
                    <div className='col-lg-4 col-md-6'>
                        <div className='home__step'>
                        <img src={transportation} className='home__img' />
                            <h4 className='home__step-title'>Transportation</h4>
                            <p className='home__step-text'>We help optimize your travel costs and dates to be able to go the extra mile. Choose to plan your entire trip or book as you travel.</p>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6'>
                        <div className='home__step'>
                            <img src={lodging} className='home__img' />
                            <h4 className='home__step-title'>Lodging</h4>
                            <p className='home__step-text'>Choose the optimal hotels, hostels, and Airbnb’s during your trip. Recommendations are personalized to your interests.</p>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6'>
                        <div className='home__step'>
                            <img src={events} className='home__img' />
                            <h4 className='home__step-title'>Events</h4>
                            <p className='home__step-text'>To ensure you fully experience the area you can be sent alerts of events at each based on your user profile or discover a new interest.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='home__video column'>
                <h3 className="text-center">Watch our Walkthrough video</h3>
                <iframe
                    width="600"
                    height="600"
                    src="https://www.youtube.com/embed/TrIP7KPmCIk"
                    frameBorder="0"
                    allowFullScreen
                />
            </section>


            <Footer/>
        </div>
    )
}
