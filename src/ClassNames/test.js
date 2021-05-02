// yarn add classnames

import React, { PureComponent } from 'react'

import classNames from 'classnames'
export default class App extends PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            isActive: true,
        }
    }
    render (){
        const { isActive } = this.state;
        const isBar = false;
        const errClass = "error";
        const warmClass = 10
        return (
            <div>
                {/* React中原生的写法 */}
                <h2 className={"foo bar active title"}>我是标题1</h2>
                <h2 className={"title" + (isActive ? "active" : "")}>我是标题1</h2>
                <h2 className={"foo bar active title"}>我是标题1</h2>
                <h2 className={"foo bar active title"}>我是标题1</h2>
                <hr/>

                {/* classNames 中的写法 */}
                <h1 className = {classNames("foo", "bar", "active")}>这个是测试</h1>
                <h1 className = {classNames("foo", "bar", "active")}>这个是测试</h1>
                <h2 className ={classNames({"active": isActive, "bar": isBar}, "title")}>这个是测试3</h2>
                <h3 className = {classNames("foo", errClass, null, warmClass)}>这个是测试4</h3>
                <h4 className = {classNames(["active", "title", 10])}>这个是测试5</h4>
                <h5 className = {classNames(["active", {"bar": isBar}])}>这个是测试6</h5>
            </div>
        )
    }
}