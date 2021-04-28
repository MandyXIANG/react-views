import React, { PureComponent } from 'react'

export default class App extends PureComponent {
    constructor (props) {
        super(props);
        this.state = {
            friends: [
                { id: 1, name: 'mandy', age: 10 },
                { id: 2, name: 'Tom', age: 12 },
                { id: 3, name: 'lucy', age: 20 },
                { id: 4, name: 'Jane', age: 24 },
            ]
        }
    }

    render () {          
        return (
            <div>
                <ul>
                    {
                        this.state.friends.map((key, index) => {
                            return (
                                <li key={key.id}>{key.name}--- {key.age}
                                <button onClick={e => this.addAge(index)}>age+1</button></li>
                            )
                        })
                    }
                </ul>
                <button onClick={e => this.addFriend()}>添加</button>
            </div>
        )
    }

    // 推荐做法
    addFriend () {
        const newValue = [...this.state.friends]
        newValue.push({ id:8, name: '222', age: 9090})
        this.setState({ friends: newValue})
    }

    addAge (index) {
        const newValue = [...this.state.friends]
        newValue[index].age += 1
        this.setState({ friends: newValue })
    }
}