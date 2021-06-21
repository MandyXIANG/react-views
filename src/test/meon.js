import React, { PureComponent, memo } from 'react'


// 函数组件使memo
const MemoHeader = memo (
    function Header() {
    console.log('MeonHeader被调用')
    return (
         <div>
            <span>我是Header</span>
        </div>
    )
}
)



// 类组件使用PureComponent
class Main extends PureComponent {
    render () {
        console.log('Main的调用')
        return (
            <div>
                <span>我是Main</span>
            </div>
        )
    }
}

const MeonFooter = memo(
    function Footer (props) {
    console.log('Footer调用')
    const { changeFooterCount } = props
    return (
        <div>
            <div>我是Footer</div>
            <button onClick={e => changeFooterCount(10)}>点我加1</button>
        </div>
    )
}
)

export default class App extends PureComponent {
    constructor (props) {
        super(props);
        this.state = {
            count: 0,
            msg: 'mandy',
            value: 0
        }
    }
    render () {
        console.log('appRender调用')
        return (
            <div>
                <h2>当前计数： {this.state.count}</h2>
                <h2>{this.state.msg}</h2>
                <h3>{this.state.value}</h3>
                <button onClick={e => this.changeCount()}>点击加1111</button>
                <Main/>
                <MemoHeader/>
                <MeonFooter changeFooterCount={e => this.addValue(e)}/>
            </div>
        )
    }

    changeCount () {
        this.setState({ count: this.state.count + 1 })
    }

    addValue(val) {
        console.log('val的值', val)
        this.setState({value: val + this.state.value})
    }
}