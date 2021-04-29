import React, { PureComponent } from 'react'
import homeStyle from './style.module.css'
export default class Home extends PureComponent {
    render() {
        return (
            <div>
                <h2 className={ homeStyle.title }>我是Home组件</h2>
                <div className="banner">
                    <span>我是轮播图1</span>
                    <span>我是轮播图2</span>
                </div>
            </div>
        )
    }
}