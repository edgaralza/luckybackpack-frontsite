import React, { Component, PropTypes } from 'react'
import IndexLink from 'react-router/lib/IndexLink'
import Link from 'react-router/lib/Link'
import Ink from 'react-ink'
import logoHeader from '../images/logoHeader'

export default class Header extends Component {
    static contextTypes = {
        router: PropTypes.object.isRequired
    }
    render() {
        // TODO landing vs dashboard header
        return (
            <header className='header row'>
                <img src={logoHeader} className='header__img' />
                <IndexLink
                    to='/'
                    className='header__tab'
                    activeClassName='active'
                >
                    <p>Home</p>
                </IndexLink>
                <Link
                    to='/about'
                    className='header__tab'
                    activeClassName='active'
                >
                    <p>About</p>
                </Link>
                <a href="http://eepurl.com/bMXxlr"
                    className='header__login'
                    activeClassName='active'><p>Login</p>
                </a>
            </header>
        )
    }
}
