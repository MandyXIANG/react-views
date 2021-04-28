import React, { Component } from 'react'

// 创建Context对象,这里是设置默认值

const UserContext = React.createContext({
    name: "Jane",
    level: 0
})

const ThemeContext = React.createContext({
    color: "red"
})

// 类组件获取值
// class ProfieHeader extends Component {
//     constructor (props) {
//         super(props);
//     }
//     render () {
//         console.log(this.context)
//         return (
//             <div>
//                 <h2>用户昵称:{this.context.name}</h2>
//                 <h2>用户等级:{this.context.level}</h2>
//             </div>
//         )
//     }
// }

// 函数式组件获取值
function ProfieHeader() {
    return (
        <UserContext.Consumer>
            {
                value => {
                    console.log('这是value', value)
                    return (
                        <ThemeContext.Consumer>
                            {
                                theme => {
                                    console.log('这是Theme', theme)
                                    return (
                                        <div>
                                            <h2 style={{color: theme.color}}>用户昵称:{value.name}</h2>
                                            <h2>用户等级:{value.level}</h2>
                                        </div>
                                    )
                                }
                            }
                        </ThemeContext.Consumer>
                    )
                }
            }
        </UserContext.Consumer>
    )
}

ProfieHeader.contextType = UserContext
ProfieHeader.contextType = ThemeContext


function Profie(props) {
    return (
        <div>
            <ProfieHeader/>
            <ul>
                <li>我</li>
                <li>很</li>
                <li>烦</li>
                <li>恼</li>
            </ul>
        </div>
    )
}

export default class Props extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: 'xiaomei Mandy meimei',
            level: 1,
        }
    }
    render () {
        return (
            <div>
                {/* 放在里面是用value传入的值 */}
                <UserContext.Provider value={this.state}>
                    <ThemeContext.Provider value={{color:'red'}}>
                            <Profie/>
                    </ThemeContext.Provider>
                </UserContext.Provider>

                {/* 放在外面是使用默认值 */}
                <Profie/>
            </div>
        )
    }
}