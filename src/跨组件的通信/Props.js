import React, { Component } from 'react'

function ProfieHeader (props) {
    return (
        <div>
            <h2>用户昵称 {props.name}</h2>
            <h2>用户等级: {props.lever}</h2>
        </div>
    )
}

function Profie(props) {
    return (
        <div>
            <ProfieHeader {...props}/>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        </div>
    )
}

export default class Props extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: 'xiaomei',
            lever: '90'
        }
    }
    render () {
        const { name, lever } = this.state

        return (
            <div>
                <Profie name={name} lever={lever} />
            </div>
        )
    }
}