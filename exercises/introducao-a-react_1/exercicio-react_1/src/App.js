import './App.css';
// import Task from 'Task';
import React from 'react'

const Task = (value) => {
  return (
    <li> Tarefa: {value}</li>
  );
}

const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];
tarefas.push('Dormir')

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Tarefas diárias</h1>
        <ul>{ tarefas.map(tarefa => Task(tarefa)) }</ul>
      </div>
    );
  }
}

export default App;
