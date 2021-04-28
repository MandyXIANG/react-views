import React, { PureComponent } from 'react'

export default class App extends PureComponent {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            valid: '',
        }
    }
    render () {
        return (
            <div>
                <form onSubmit={e => this.submit(e)}>
                    <div>
                            <label htmlFor="username">用户
                                <input type="text"
                                    id="username"
                                    name="username"
                                    onChange={e => this.changeValue(e)}
                                    value={this.state.username}/>
                            </label>
                    </div>
                    <div>
                            <label htmlFor="password">密码
                                <input type="text"
                                    id="password"
                                    name="password"
                                    onChange={e => this.changeValue(e)}
                                    value={this.state.password}/>
                            </label>
                    </div>
                    <div>
                            <label htmlFor="valid">验证
                                <input type="text"
                                    id="valid"
                                    name="valid"
                                    onChange={e => this.changeValue(e)}
                                    value={this.state.valid}/>
                            </label>
                    </div>
                    
                    <input type="submit" value="提交"/>
                </form>
            </div>
        )
    }
    submit (event) {
        event.preventDefault()
        console.log(this.state.username, this.state.password, this.state.valid)
    }
    changeValue (e) {
        console.log(e.target.name)
        // ES6的计算属性名
        this.setState({ [e.target.name]: e.target.value })
    }
}