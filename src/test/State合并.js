import React, { Component } from 'react'

export default class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            count: 1,
        }
    }
    render () {
        return (
            <div>
                <div>当前计数：{this.state.count}</div>
                <button onClick={e => this.changeNum()}>更改</button>
            </div>
        )
    }

    changeNum () {
      this.setState((preState, props) => {
          return {
            count: preState.count + 1 
          }
      })
    }
}