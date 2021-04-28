import React, { Component } from 'react'


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'mandy',
            age: 19,
            hobby: 'swimming'
        }
    }
    render () {
        return (
            <div>
                <div>99999</div>
                <button onClick={e => {this.add()}}>点击我</button>
            </div>
        )
    }

    // 标签模板字符串： 通过模板字符串的方式对函数进行调用

    getValue(...arg) {
        console.log(arg)
    }
    add() {
        this.getValue`my name is ${this.state.name}, my age is ${this.state.age}, my hobby is ${this.state.hobby}`
    }
}