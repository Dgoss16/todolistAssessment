import React, { Component } from 'react';

class ToDo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            task: props.task,
            completed: false,
            color: 'red',
            completedTask: 'green'
        }
        this.completeTask = this.completeTask.bind(this)
    }

    completeTask(task) {
        if (task === this.props.task) {
            this.setState({
                completed: true
            })
        }
    }
    render() {
        return (
            <div>
                {this.state.completed ? <div style={{color:this.state.completedTask}}>{this.props.task}</div>
                : <div style={{color:this.state.color}}>{this.props.task}</div> }
                <button type='button' disabled={this.state.completed} onClick={(e) => {
                    this.completeTask(this.props.task) }}>Complete</button>
                <button onClick={(e) => {
                    this.props.removeTask(this.props.task)}}>Remove Task</button>
            </div>
        )
    }
}
export default ToDo;