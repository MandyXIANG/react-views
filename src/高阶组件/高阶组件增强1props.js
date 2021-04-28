import React, { PureComponent } from 'react'

// 定义高阶组件HOC  本身是一个函数，参数是一个组件，返回值是一个新增组件
function enhanceRegionProps(WrappendComponent) {
    return props => {
        return <WrappendComponent {...props} region="中国"/>
    }
}

class Home extends PureComponent {
    render() {
        return (
            <h2>
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
            <h2>
                {
                    `姓名：${this.props.nickname}
                    等级: ${this.props.level}
                    区域: ${this.props.region}`
                }
            </h2>
        )
    }
}

const EnhanceHome = enhanceRegionProps(Home); // 引用是需要改名, 引用时父组件不需要做修改

const EnhanceAbout = enhanceRegionProps(About); 

class App extends PureComponent {
    render () {
        return (
            <div>App
                <EnhanceHome nickname="codeWhy" level={99}/>
                <EnhanceAbout nickname="Mandy" level={66}/>
            </div>
        )
    }
}

export default App