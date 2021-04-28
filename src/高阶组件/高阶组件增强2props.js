import React, { PureComponent, createContext } from 'react'


// 定义高阶组件

function withUser(WrappendComponent) {
    return props => {
        console.log('111', props)
        return (
            <UserContext.Consumer>
                {
                    user => {
                        console.log('2222', user)
                        return <WrappendComponent {...props} {...user}/>
                    }
                }
            </UserContext.Consumer>
        )
    }
}

const UserContext = createContext({
    nickname: 'mandy',
    level: '90',
    region: '中国'
})

class Home extends PureComponent {
    render() {
        return (
            <h2>Home:
                {
                    `姓名：${this.props.nickname}
                    等级: ${this.props.level}
                    区域: ${this.props.region}`
                }
            </h2>
        )
        
    }
}



class About extends PureComponent {
    render () {
        return (
            <h2>About:
                {
                    `姓名：${this.props.nickname}
                    等级: ${this.props.level}
                    区域: ${this.props.region}`
                }
            </h2>
        )
    }
}

const UserHome = withUser(Home)
const UserAbout = withUser(About)

class App extends PureComponent {
    render () {
        return (
            <div>
                <UserContext.Provider value={{nickname:'why', level: '1.88', region: "美国"}}>
                    <UserHome/>
                    <UserAbout/>
                </UserContext.Provider>
            </div>
        )
    }
}

export default App