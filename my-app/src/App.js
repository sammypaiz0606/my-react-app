import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name:'Sam', age: 28},
      {name:'Glenda', age:39},
      {name:'Ariana', age:4},
      {name:'Christian', age: 35},
      {name:'Wil', age:34}
    ]
  }

  render() {
    return(
      <div className='App'>
        <h1>Hi, I'm a React App!</h1>
        <p>This is really working!</p>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age}>My hobbies: Research!</Person>
        <Person name={this.state.persons[4].name} age={this.state.persons[4].age} />
      </div>
      );
  }
}

export default App;


