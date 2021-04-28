import React, { PureComponent } from 'react'
import './style.css'
export default class Profile extends PureComponent {
    render() {
        return (
            <div className="profile">
                <h2 className="title">我是Profile的标题</h2>
                <div className="setting">
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