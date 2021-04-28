import React, { PureComponent } from 'react'



class App extends PureComponent {
    render() {
        return (
            <div>{this.props.name}</div> // 从index.js中传入
        )
    }
}

function enhanceComponent(WrapperComponent) {
     class NewComponent extends PureComponent{
        render () {
            return <WrapperComponent {...this.props}/>
        }
    }
    return NewComponent
}

const EnhanceComponent = enhanceComponent(App)

export default EnhanceComponent