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
        console.log('footer的调用')
        return (
            <div>
                <span>我是Main</span>
            </div>
        )
    }
}

const MeonFooter = memo(
    function Footer () {
    console.log('我是footer')
    return (
        <div>
            <div>我是Footer</div>
        </div>
    )
}
)

export default class App extends PureComponent {
    constructor (props) {
        super(props);
        this.state = {
            count: 0,
            msg: 'mandy'
        }
    }
    render () {
        console.log('appRender调用')
        return (
            <div>
                <h2>当前计数： {this.state.count}</h2>
                <h2>{this.state.msg}</h2>
                <button onClick={e => this.changeCount()}>点击1</button>
                <Main/>
                <MemoHeader/>
                <MeonFooter/>
            </div>
        )
    }

    changeCount () {
        this.setState({ count: this.state.count + 1 })
    }
}