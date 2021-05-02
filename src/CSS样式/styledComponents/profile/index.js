import React, { PureComponent } from 'react'
import styled from 'styled-components'

// 1、 props的穿透。 增加普通的属性 eg: placeholder, password
// 2、使用attrs返回值是一个函数，需要传入一个对象，可以继续调用。
// 3、传入state作为props属性

const IntStyle = styled.input.attrs({
    placeholder: "mandy找你",
    bColor: "red"
})`
    border-color: ${props => props.bColor}; // 从attrs中传入的属性
    color: ${props => props.color}; // 更改来自state的属性
    background-color: ${props => props.background};
`


export default class Profile extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            color: "red", // 输入文字的颜色
            background: "blue"
        }
    }
    render() {
        return (
            <div>
                <input type="text"/>
                <IntStyle type="text" color={this.state.color} background={this.state.background}/>
                <h2>我是Profile的标题</h2>
                <div>
                    <ul>
                        <li>1222</li>
                        <li>2222</li>
                        <li>333</li>
                    </ul>
                </div>
            </div>
        )
    }
}