import React, { Component } from 'react'
import './style.css'

export default class NavBar extends Component {
    render () {
        return (
            <div className="nav-bar">
                <div className="nav-left nav-item">{this.props.children[0]}</div>
                <div className="nav-center nav-item">{this.props.children[1]}</div>
                <div className="nav-right nav-item">{this.props.children[2]}</div>
            </div>
        )
    }
}