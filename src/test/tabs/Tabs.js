import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './style.css'

export default class Tabs extends Component {
    constructor (props) {
        super(props)
        this.state = {
            currentIndex: 0
        }
    }
    static propTypes = {
        lists: PropTypes.array.isRequired
    }
    render () {
        const { lists } = this.props;
        const { currentIndex } = this.state

        return (
            <div className="container"> 
                {
                    lists.map((key, index) => {
                        return  <div key={index}
                                     className={"tab-item " + (currentIndex === index ?  "active" : "")}
                                     onClick={() => this.clickTab(index)}>
                                    <span className="title-value">{key}</span>
                                </div>
                    })
                }
            </div>
        )
    }

    clickTab (index) {
        this.setState({ currentIndex: index})
        const { itemClick } = this.props
        itemClick(index)
    }
}