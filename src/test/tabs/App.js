import React, { Component } from 'react'


import Tabs from './Tabs'

export default class App extends Component {
    constructor (props) {
        super(props)
        this.titles = ['新款', '流行', '精选']
        this.state = {
            currentTitle: "新款",
        }
    }
    render () {
        const { currentTitle } = this.state
        return (
            <div>
                <Tabs itemClick={(index) => {this.itemClick(index)}} lists={this.titles}/>
                <h2>{currentTitle}</h2>
            </div>
        )
    }

    itemClick (index) {
        this.setState({currentTitle: this.titles[index]})
    }

}