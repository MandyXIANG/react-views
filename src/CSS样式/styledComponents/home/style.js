import styled from 'styled-components'

// styled.div 返回一个div的react组件  安装插件 vscode-styled-components

export const HomeWrapper = styled.div`
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

export const HeaderWrapper = styled.h2`
    font-weight: bold;
    text-decoration: underline;
    color: ${props => props.theme.themeColor};  // 使用共享主题
    font-size: ${props => props.theme.fontSize};
`