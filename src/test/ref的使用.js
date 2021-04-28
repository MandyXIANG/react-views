import React, { PureComponent, createRef } from 'react'


class Counter extends PureComponent {
    constructor (props) {
        super (props);
        this.state = {
            count: 1
        }
    }
    render () {
        return (
            <div>
                <h2>{this.state.count}</h2>
                <button onClick={e => this.increment()}>新增</button>
            </div>
        )
    }

    increment () {
        this.setState({ count: this.state.count + 1})
    }
}
export default class App extends PureComponent {
    constructor(props) {
        super(props);
        this.titleRef = createRef() // 第二种方式
        this.addRef = createRef()
        this.state = {
            count: 1,
            num: 0
        }
    }

    componentDidMount() {
    }
    render() {
        return (
            <div>
                {/* 第一种方式 字符串 */}
                <div ref="mandy">{this.state.count}</div>
                {/* 第二种方式 对象 */}
                <h2 ref={this.titleRef}>22222</h2>
                {/* 第三种方式 函数 */}
                <h2 ref={arg => this.titleEl = arg}>33333</h2>

                <button onClick={e => this.changValue()}>改变文本</button>

                <hr/>
                <Counter ref={this.addRef}/>
                <button onClick={e => this.appClick()}>打印Counter</button>
            </div>
        )
    }

    changValue() {
        console.log(this.refs.mandy) // 第一种方式
        console.log(this.titleRef.current) // 第二种方式
        this.titleRef.current.innerHTML = '我是第二种方式改变的值'
        console.log(this.titleEl)
    }
    appClick () {
        console.log(this.addRef.current)
    }

}