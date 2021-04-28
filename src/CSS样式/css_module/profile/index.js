import React, { PureComponent } from 'react'
import profileStyle from './style.module.css'
export default class Profile extends PureComponent {
    render() {
        return (
            <div>
                <h2 className={profileStyle.title}>我是Profile的标题</h2>
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