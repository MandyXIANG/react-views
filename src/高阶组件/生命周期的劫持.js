import React, { PureComponent } from 'react'

function WithRenderTime(WrappendComponent) {
     return class extends PureComponent {
        UNSAFE_componentWillMount() {
            this.beginTime = Date.now()  // Date.now()和new.Date().getTime() 都是获取1970年1月1日截止到现在时刻的时间戳，但是从性能上来讲Date.now()要快于new.Date().getTime()
        }
        componentDidMount() {
            this.endTime = Date.now()
            const change = this.endTime - this.beginTime
            console.log(`${WrappendComponent.name}`, change)
        }
        render () {
            return <WrappendComponent/>
        }
    }
}

class Home extends PureComponent {
    
    render() {
        return (
            <h2>Home</h2>
        )
        
    }
    
}



class About extends PureComponent {
    render () {
        return (
            <h2>About</h2>
        )
    }
}

const TimeHome = WithRenderTime(Home)
const TimeAbout = WithRenderTime(About)

export default class App extends PureComponent{
    render () {
        return (
            <div>
                <TimeHome/>
                <TimeAbout/>
            </div>
            
        )
    }
}