import React, { createRef, PureComponent, } from 'react'

export default class App extends PureComponent {
    constructor() {
        super();
        this.usernameRef = createRef()
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
                               ref={this.usernameRef}/>
                    </label>
                    <input type="submit" value="提交"/>
                </form>
            </div>
        )
    }
    submit (event) {
        event.preventDefault()
        console.log(this.usernameRef.current.value)
    }
}