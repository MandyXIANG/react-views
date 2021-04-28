import React, { Component } from 'react'
import './style.css'

export default class NavBar2 extends Component {
    render () {
        const  { leftSlot, centerSlot, rightSlot } = this.props
        return (
            <div className="nav-bar">
                <div className="nav-left nav-item">{leftSlot}</div>
                <div className="nav-center nav-item">{centerSlot}</div>
                <div className="nav-right nav-item">{rightSlot}</div>
            </div>
        )
    }
}