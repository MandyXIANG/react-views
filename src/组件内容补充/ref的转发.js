import React, { PureComponent, createRef, forwardRef } from 'react'
import request from '../axios/server'

class Home extends PureComponent {
    render() {
        const { name } = this.props
        return (
            <div>
                <h3>home组件</h3>
                <h2>{name}</h2>
            </div>
            
        )
    }
}

// 函数式组件中没有示例，不能获取到对应的组件示例，
// 获取函数式组件中某个元素的DOM 通过forwardRef高阶函数 传入ref
const About = forwardRef(function About(props, ref) {
    return (
        <div>
                <h2>我是About组件</h2>
                <h3>{props.name}</h3>
                <h4 ref={ref}>我是谁，我在那</h4>
        </div>
        
    )
})


export default class App extends PureComponent {
    constructor() {
        super();
        this.titleRef = createRef()
        this.homeRef = createRef()
        this.aboutRef = createRef()
    }
    
    render() {
        return (
            <div>
                <div ref = {this.titleRef}/>
                <Home ref = {this.homeRef} name={"Hello"}/>
                <About ref = {this.aboutRef} name={"Mandy"}/>
                <button onClick={e => this.getRef()}>打印</button>
            </div>
        )
    }

    getRef () {
        console.log('正常', this.titleRef.current)
        console.log('对象', this.homeRef.current)
        console.log('函数', this.aboutRef.current)
        request({
            url: 'get',
            params: {
                name: 'mandy',
                age: 12
            }
        }).then(
            console.log
        )
    }

    
}