import React, { Component } from 'react';
import './App.css';
import ToDo from './Components/ToDo/ToDo';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      taskName: '',
      task: '',
      list: []
    }
    this.inputtaskName = this.inputtaskName.bind(this)
    this.addNewTask = this.addNewTask.bind(this)
    this.removeTask = this.removeTask.bind(this)
  }

  inputtaskName(e) {
    this.setState({
      taskName: e.target.value
    })
  }

  addNewTask() {
    this.setState({
      task: this.state.taskName,
      list: [...this.state.list, this.state.taskName],
      taskName: ''
    })
  }

  removeTask(task) {
    let newList = this.state.list.filter((item) => {
      return item !== task
    })
    this.setState({
      list: newList
    })
  }

  render() {
    let list = this.state.list.map((task) => {
      return <ToDo key={task} task={task}
      removeTask = {this.removeTask}/>
    })
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Simple To-Do List</h1>
        </header>

        <div>
          <input placeholder='Add a Task Here' value={this.state.taskName} onChange={this.inputtaskName} type='text'/>
          <button disabled={!this.state.taskName} onClick={this.addNewTask} type='button'>Add To List</button>
        </div>

        <div className='listbox'>Current Tasks{list}</div>

      </div>
    );
  }
}

export default App;
