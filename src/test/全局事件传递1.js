import React, { PureComponent } from 'react'

import { EventEmitter } from 'events'

const eventBus = new EventEmitter()

class Child extends PureComponent {

    componentDidMount () {
        eventBus.addListener('sayHello', this.handleValue)
    }

    componentWillUnmount () {
        eventBus.removeListener('sayHello', this.handleValue)
    }

    handleValue (...arg) {
        console.log(...arg)
    }  
 
    render () {
        return (
            <div>我是child</div>
        )
    }
}

export default class App extends PureComponent {
    render () {
        return (
            <div>
                <div>我是Header</div>
                <Child/>
                <button onClick={ e => this.changeValue()}>点击我传值</button>
            </div>
        )
    }
    changeValue () {
        eventBus.emit('sayHello', '我很好',  9090)
    }
}