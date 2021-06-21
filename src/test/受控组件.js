import React, { PureComponent } from 'react'

// 只能通过setState() 来改变元素
export default class App extends PureComponent {
    constructor() {
        super();
        this.state = {
            username: ''
        }
    }
    render () {
        return (
            <div>
                <form onSubmit={e => this.submit(e)}>
                    <label htmlFor="username">用户
                        <input type="text"
                               id="username"
                               onChange={e => this.changeValue(e)}
                               value={this.state.username}/>
                    </label>
                    <input type="submit" value="提交"/>
                </form>
            </div>
        )
    }
    submit (event) {
        event.preventDefault()
        console.log(this.state.username)
    }
    changeValue (e) {
        this.setState({ username: e.target.value })
    }
}