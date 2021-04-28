import React, { Component } from 'react'

export default class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            msg: 'Hello World',
            name: 'codeWhy'
        }
    }
    render () {
        return (
            <div>
                <div>{this.state.name}</div>
                <div>{this.state.msg}</div>
                <button onClick={e => this.changeText()}>更改</button>
            </div>
        )
    }

    changeText () {
        this.setState({ msg: '你好' })
    }
}