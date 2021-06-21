import React, { PureComponent } from 'react'

// 应用场景： 如果所有的类都需要现 shouldComponentUpdate来判断是否需要更新，增加工作量
class Header extends PureComponent {
        render () {
            console.log('header调用')
            return (
                <div>
                    <span>我是Header</span>
                </div>
            )
        }
    }

class Main extends PureComponent {
    render () {
        console.log('footer的调用')
        return (
            <div>
                <span>我是Footer</span>
            </div>
        )
    }
}

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
                <button onClick={e => this.changeText()}>点击2</button>
                <Header/>
                <Main/>
            </div>
        )
    }

    changeCount () {
        this.setState({ count: this.state.count + 1 })
    }

    changeText () {
        this.setState({ msg: 'jane' })
    }
}