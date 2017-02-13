import React, { Component, PropTypes } from 'react'
import IndexLink from 'react-router/lib/IndexLink'
import Link from 'react-router/lib/Link'
import Ink from 'react-ink'
import logoHome from '../images/logoHome'

export default class About extends Component {
    static contextTypes = {
        router: PropTypes.object.isRequired
    }
    render() {
        return (
          <div className="aboutpage">
            <section className= "about-content">
              <h4 className="about-h">Lucky Backpack Technologies</h4>
              <p className="about-p"> Lucky Backpack is a data company</p>
              <p className="about-p"> We believe that everyone deserves the opportunity to learn through traveling. By reinventing the way we use and distribute data
              we are improving the way people communicate and travel.</p>
              <p>Our products empower people to explore the world, foster relationships, and have fun while being on the road. </p>
              </section>
              <section className="about-image">
                <img src={logoHome} className='about_img' />
              </section>
          </div>
        )


  }

}
