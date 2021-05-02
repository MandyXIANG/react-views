import React, { PureComponent } from 'react'

import { HomeWrapper, HeaderWrapper } from './style'

export default class Home extends PureComponent {
    render() {
        return (
            <HomeWrapper>
                <HeaderWrapper>我是Home组件</HeaderWrapper>   
                <div className="banner">
                    <span>我是轮播图1</span>
                    <span className="active">我是轮播图2</span>
                    <span>我是轮播图3</span>
                </div>
            </HomeWrapper>
        )
    }

}