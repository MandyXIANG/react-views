import React, { PureComponent } from 'react'
import styled from 'styled-components'

// styled.div 返回一个div的react组件  安装插件 vscode-styled-components

const HomeWrapper = styled.div`
    font-size: 30px;
    color: red;
    .banner{
        background-color: #40a9ff;
        span{
            color: #ffffff;

            &.active{
                color: #f5222d;
            }
            :hover{
                cursor: pointer;
                color: #eb2f96;
                font-weight: 800;
            }
            ::after {
                content: '_add Value'
            }
        }
    }
`

const HeaderWrapper = styled.h2`
    font-weight: bold;
    text-decoration: underline;
`

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