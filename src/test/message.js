import React, { Component } from 'react'
import PropTypes from 'prop-types'

ChildMsg.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    height: PropTypes.number,
    lists: PropTypes.array
}

ChildMsg.defaultProps = {
    name: 'Jane3333',
    age: 1003333,
    height: 300,
    lists: []
}


// 函数组件
function ChildMsg (props) {
    const { name, age, height, lists } = props
    return (
        <div>
            <span>{name}-</span>
            <span>{age}-</span>
            <span>{height}</span>
            {
                lists.map((key, index) => {
                    return (<div key={index}>{index}--{key}</div>)
                })
            }
        </div>
    )
}

// 类组件
class ChildTest extends Component {
    constructor (props) {
        super(props)
        console.log(this.props)
    }
    // 类属性中的写法 使用static
    static propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number,
        height: PropTypes.number,
    };
    static defaultProps = {
        name: 'Jane3333',
        age: 1003333,
        height: 300,
    }
    render () {
        const { name, age, height } = this.props
        return (
           <div>
            <span>{name}-</span>
            <span>{age}-</span>
            <span>{height}</span>
        </div> 
        )
    }
}



export default class Message extends Component {
    render () {
        return (
            <div>
                <ChildMsg name='Mandy' age={18} height={190} lists={['haha', 'ioio', '9090']} />
                <ChildTest name='dada' age={90} height={890}/>
                <ChildMsg/>
                <ChildTest/>
            </div>
        )
    }
}