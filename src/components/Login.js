import React, { Component, PropTypes } from 'react'
import IndexLink from 'react-router/lib/IndexLink'
import Link from 'react-router/lib/Link'
import Ink from 'react-ink'

export default class Login extends Component {
    static contextTypes = {
        router: PropTypes.object.isRequired
    }
    render() {
        // TODO landing vs dashboard header
        return (
          //Begin MailChimp Signup Form
           <div id="myModal" className="modal">
                   <div className="modal-content">
                     <h4>Sign up for our relase updates!</h4>
                     <input type="text" className="useremails" placeholder="Email"></input>
                     <button className="register"> Register </button>
                      </div>
                 </div>
        )
    }
}
