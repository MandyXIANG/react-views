import React, { PureComponent } from 'react'

export default class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            color: 'blue'
        }
    }
    render() {
        const divStyle = {
            color: this.state.color,
            textDecoration: 'underline',
            fontSize: '30px'
        }
        return (
            <div>
                <p style={{ fontSize: '50px', color: 'red'}}>我是P元素</p>
                <div style={divStyle}>我是div元素</div>
            </div>
        )
    }
}