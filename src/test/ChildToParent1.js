import React, { Component } from 'react'

// 子到父需要传递参数
class ChildNum extends Component {
  render () {
    const { btnClick } = this.props
      return (
          <div>
              <button onClick={e => btnClick(10)}>子加加++++</button>
          </div>
      )
  }
}

export default class ChildToParent extends Component {
    constructor () {
        super();
        this.state = {
            num: 1000
        }
    }
    render () {
        return (
            <div>
                <h2>当前计数{this.state.num}</h2>
                <button onClick={() => this.changeNum(-1)}>----</button>
                <button onClick={() => this.changeNum(1)}>+++</button>
                <ChildNum btnClick={e => this.changeNum(e) }/>
            </div>
        )
    }

    changeNum(flag) {
        console.log('传入的参数', flag)
        this.setState({ num: this.state.num + flag})
    }
}