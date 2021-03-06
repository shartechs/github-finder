import React, { Component } from 'react'
import propTypes from 'prop-types'

export class Navbar extends Component {
    static defaultProps = {
        title: 'Github Finder',
        icon: 'fab fa-github'
    };

    static propTypes = {
        title: propTypes.string.isRequired,
        icon: propTypes.string.isRequired 
    }

    render() {
        return (
            <div>
                <h1><i className={this.props.icon}></i> {this.props.title}</h1>
            </div>
        )
    }
}

export default Navbar
