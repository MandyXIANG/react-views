import React, { PureComponent } from 'react';

// ThemeProvider // 增加主题颜色

import styled, { ThemeProvider } from 'styled-components';


import Home from './home';
import Profile from './profile';

const HYButton = styled.button`
    color: purple;
    padding: 10px 20px; // 公共样式
    border-color: red; // 公共样式
`

// const HYpRrimaryButton = styled.button`
//     padding: 10px 20px; // 公共样式
//     color: white;
//     background-color: green;
//     border-color: red; // 公共样式
// `

// 采用继承CSS的方式,调用函数的方式
const HYpRrimaryButton = styled(HYButton)`
    color: white;
    background-color: green;
    /* padding: 10px 20px;// 公共样式  可以省略 */
    /* border-color: red; // 公共样式 可以省略*/
`

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
            <ThemeProvider theme={{ themeColor: "yellow", fontSize: "30px" }}>
                <Home/>
                <hr/>
                <Profile/>
                <HYButton>我是普通的按钮</HYButton>
                <HYpRrimaryButton>我是基础按钮</HYpRrimaryButton>
            </ThemeProvider>
        )
    }

    // 标签模板字符串的示例，通过模板字符串的方式对函数进行调用
    testValue(...arg) {
        console.log(arg)
    }
}