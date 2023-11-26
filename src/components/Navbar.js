import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'


export default function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme='dark'>
                <div className="container-fluid">
                    <p className="navbar-brand">{props.title}</p>
                </div>
            </nav>
        </>
    )
}

Navbar.propTypes = {
    title: PropTypes.string,
    about: PropTypes.string
}

Navbar.defaultProps = {
    title: "its' me",
    about: "about me"
}