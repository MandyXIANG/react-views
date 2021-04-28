import React, { PureComponent } from 'react';


import Home from './home';
import Profile from './profile';

export default class App extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            name: "mandy",
            play: 'swimming',
            hobby: 'play basketball'
        }
    }

    componentDidMount() {
        this.testValue`my name is ${this.state.name} my hobby is ${this.state.play}, my hobby is ${this.state.hobby}`
    }
    render() {
        return (
            <div>
                <Home/>
                <Profile/>
            </div>
        )
    }

    // 标签模板字符串的示例，通过模板字符串的方式对函数进行调用
    testValue(...arg) {
        console.log(arg)
    }
}