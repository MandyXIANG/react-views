import React, { PureComponent, StrictMode } from 'react'

class Home extends PureComponent {
    constructor(props) {
        super(props);
        console.log('home组件')
    }
    render() {
        return (
            <div>
               home组件
            </div>
            
        )
    }
}

class About extends PureComponent {
    render() {
        return (
            <div>
                About组件
            </div>
            
        )
    }
}



export default class App extends PureComponent {
    render() {
        return (
            <div>
                <StrictMode>
                    <Home/>
                </StrictMode>
                <About/>
            </div>
        )
    }
}