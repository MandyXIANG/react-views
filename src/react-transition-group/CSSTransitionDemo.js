import React, { PureComponent } from 'react'

import { CSSTransition } from 'react-transition-group'

import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

import "./CSSTransitionDemo.css"

const { Meta } = Card;

export default class CSSTransitionDemo extends PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            isShow: true
        }
    }

    componentDidMount() {
        let arr1 = [
            {a:1, b:2, c: 3},
            {a:2, b:3, c: 4},
        ]
        let arr2 = [
            {a:1, b:2, d: 3},
            {a:2, b:3, d: 4},
        ]
        const getData = (arr1, arr2) => {
            arr1.forEach(index => {
            arr2.forEach(indey => {
                if (index.b === indey.b) {
                    index.e = indey.d
                }
                })
            })
            return arr1
        }
        console.log(getData(arr1, arr2))
    }
    render() {
        const { isShow } = this.state
        return (
             <div>
                 <button onClick={e => this.setState({isShow: !isShow})}>点击切换</button>
                 <CSSTransition in={isShow}
                                classNames="card"
                                timeout={300}>
                    <Card
                        style={{ width: 300 }}
                        cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                        }
                        actions={[
                        <SettingOutlined key="setting" />,
                        <EditOutlined key="edit" />,
                        <EllipsisOutlined key="ellipsis" />,
                        ]}
                    >
                        <Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title="Card title"
                        description="This is the description"
                        />
                    </Card>
                 </CSSTransition>
             </div>
      
      )
    }
}