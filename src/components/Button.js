import React, { PropTypes } from 'react'
import Ink from 'react-ink'

export default function Button({ onClick, className, children }, { router }) {

    return (
        <div className='Button' onClick={() => setTimeout(onClick, 100)}>
            <p>{children}</p>
            <Ink/>
        </div>
    )
}

Button.PropTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string,
}

Button.contextTypes = {
    router: PropTypes.object
}