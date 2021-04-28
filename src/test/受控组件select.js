import React, { PureComponent } from 'react'

export default class App extends PureComponent {
    constructor() {
        super();
        this.state = {
            fruits: 'pear'
        }
    }
    render () {
        return (
            <div>
                <form onSubmit={e => this.submit(e)}>
                    <select name="fruits"
                            onChange={e => this.changeValue(e)}
                            value={this.state.fruits}>
                        <option value="apple">苹果</option>
                        <option value="cherry">樱桃</option>
                        <option value="banana">香蕉</option>
                        <option value="pear">梨子</option>
                    </select>
                    <input type="submit" value="提交"/>
                </form>
            </div>
        )
    }
    submit (event) {
        event.preventDefault()
        console.log(this.state.fruits)
    }
    changeValue (e) {
        this.setState({ fruits: e.target.value })
        console.log(e.target.value)
    }
}