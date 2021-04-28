import React, { PureComponent } from 'react'

class LogonPage extends PureComponent {
    render () {
        return (
            <div>我是登录页面啊</div>
        )
    }
}

function withAuth(WrappendComponent) {
    return props => {
        console.log(props)
        const { isLogin } = props
        if (isLogin) {
            return <WrappendComponent {...props}/>
        } else {
            return <LogonPage/>
        }
    }
}

class CardPage extends PureComponent {
    render () {
        return (
            <div>我是CardPage</div>
        )
    }
}

const AuthCardPage = withAuth(CardPage)

export default class App extends PureComponent{
    render () {
        return (
            <div>
                <AuthCardPage isLogin={false} />
            </div>
        )
    }
}