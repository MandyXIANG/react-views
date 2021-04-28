import React, { PureComponent, Fragment } from 'react';

export default class App extends PureComponent {
    constructor() {
        super();
        this.state = {
            count: 0,
            friends: [
                { id: 1, name: 'mandy' },
                { id: 2, name: 'xiaohua' },
                { id: 3, name: 'xiaoming' },
            ]
        }
    }
    
    render() {
        return (
            // Fragment可以简写为<></>  有key的话不能省略
            <Fragment>
                <div>当前计数：{this.state.count}</div>
                <button onClick={e => this.changeCount()}>点击+1</button>
                <div>
                    {
                        this.state.friends.map(key => {
                            return (
                                <Fragment key ={key.id}>
                                    <div>{key.id}</div>
                                    <p>{key.name}</p>
                                    <hr/>
                                </Fragment>
                            )
                        })
                    }
                </div>
            </Fragment>
        )
    }

    changeCount() {
        this.setState({ count: this.state.count + 1 })
    }
}