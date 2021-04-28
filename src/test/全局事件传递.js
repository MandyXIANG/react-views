import React, { PureComponent } from 'react'

import { EventEmitter } from 'events'

// 时间总线 EventBus

const eventBus = new EventEmitter();
class Home extends PureComponent {

    componentDidMount () {
        eventBus.addListener('sayHello', this.handleSayHelloListerer)
    }

    componentWillUnmount () {
        eventBus.removeListener('sayHello', this.handleSayHelloListerer)
    }

    handleSayHelloListerer (msg, num) {
        console.log('打印', msg, num)
    }
    render () {
        return (
            <div>
                <div>Home</div>
            </div>
        )
    }
}

class Profile extends PureComponent {
    render () {
        return (
            <div>
                <button onClick={ e => this.changeValue()}>点击了Profile按钮</button>
            </div>
        )
    }

    changeValue () {
        eventBus.emit('sayHello', 123, 'Hello Home')
    }
}

export default class App extends PureComponent {
    constructor (props) {
        super (props);
    }
    render () {
        return (
            <div>
                <Home/>
                <Profile/>
            </div>
        )
    }
}