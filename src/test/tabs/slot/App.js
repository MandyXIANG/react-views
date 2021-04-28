import React, { Component } from 'react'
import NavBar from './NavBar'
 import NavBar2 from './NavBar2'
export default class App extends Component {
    render () {
        return (
            <div>
                <NavBar>
                    <div>1111</div>
                    <div>2222</div>
                    <div>3333</div>
                </NavBar>

                <NavBar2 leftSlot={<span>aaaa</span>}
                         centerSlot={<strong>bbbb</strong>}
                         rightSlot={<div>cccccccc</div>}>
                </NavBar2>
            </div>
        )
    }
}