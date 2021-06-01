import React, { PureComponent, createRef } from 'react';
import ReactDom from 'react-dom';

// 需要在public/index 把注释打开

class Modal extends PureComponent {
    render() {
        console.log(this.props.children)
        return ReactDom.createPortal(
            this.props.children,
            document.getElementById("")
        )
    }
}
class Home extends PureComponent {
    render() {
        return (
            <div>
                <h2>home组件</h2>
                <Modal>
                    <h2>标题</h2>
                    <span>确认</span>
                    <span>取消</span>
                </Modal>
            </div>
            
        )
    }
}

export default class App extends PureComponent {
    constructor() {
        super();
        this.homeRef = createRef()
    }
    
    render() {
        return (
            <div>
                <Home ref = {this.homeRef} />
            </div>
        )
    }
}