import React, { Component } from 'react'

export default class State extends Component {
    constructor (props) {
        super(props);
        this.state = {
            msg: '原始值'
        }
    }
    render () {
        return (
            <div>
                <span>{this.state.msg}</span>
                <button onClick={e => this.changeState()}>点击我</button>
                <button id="btn">再点击我</button>
            </div>
        )
    }

    componentDidMount() {
        // 将setState放在原生里面会成为同步
        document.getElementById('btn').addEventListener('click', () => {
            this.setState({msg: '再点击我'})
            console.log(this.state.msg)
        })
    }

    changeState() {
        // 将setState放入在定时器时，会成为同步
        setTimeout(() => {
            this.setState({ msg: '更新值' })
            console.log(this.state.msg)
        }, 0)
        
    }
}