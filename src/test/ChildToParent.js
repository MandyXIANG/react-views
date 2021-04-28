
// 子组件到父组件传参

import React, { Component } from 'react'

class ChildNum extends Component {
    render () {
        const { btnClick } = this.props
        return (
            <div>
                <button onClick={ btnClick }>++++</button>
            </div>
        )
    }
}f

export default class ChildToParent extends Component {
    constructor () {
        super();
        this.state = {
            num: 0
        }
    }
    render () {
        return (
            <div>
                <h2>当前计数{this.state.num}</h2>
                <button onClick={() => this.changeNum(-1)}>----</button>
                <button onClick={() => this.changeNum(1)}>+++</button>
                <ChildNum btnClick={() => this.changeNum(1) }/>
            </div>
        )
    }

    changeNum(flag) {
        this.setState({ num: this.state.num + flag})
    }
}