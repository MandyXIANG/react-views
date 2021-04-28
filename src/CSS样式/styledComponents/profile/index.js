import React, { PureComponent } from 'react'


export default class Profile extends PureComponent {
    render() {
        return (
            <div>
                <input type="text"/>
                <h2>我是Profile的标题</h2>
                <div>
                    <ul>
                        <li>1222</li>
                        <li>2222</li>
                        <li>333</li>
                    </ul>
                </div>
            </div>
        )
    }
}