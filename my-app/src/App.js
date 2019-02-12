import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'sss1', name:'Sam', age: 28},
      { id:'sss11', name:'Glenda', age:39},
      { id:'sss111', name:'Ariana', age:4},
      { id: 'sss1111', name:'Christian', age: 35},
      { id: 'sss11111', name:'Wil', age:34}
    ], 
    persons2: [
      {name:'Litzy', age:15},
      {name:'Marlene', age:27}
    ],
    showPersons: false,
    userInput: ''
    
   
  }


nameChangedHandler = (event, id) => {

  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id;
  });

  const person =  {
    ...this.state.persons[personIndex]
  };

  person.name = event.target.value;

  const persons = [...this.state.persons];
  persons[personIndex] = person;

  this.setState({persons: persons});
}

deletePersonHandler = (personIndex) => {
 // const persons = this.state.persons.slice();
 const persons = [...this.state.persons];
  persons.splice(personIndex, 1);
  this.setState({persons: persons});
}

togglePersonsHandler =() => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
}

inputChangeHandler = (event) => {
  this.setState({userInput: event.target.value});
}
  render() {
    const style = {
      backgroundColor: 'green',
      color:'white',
      borderRadius: '5px',
      padding:'8px',
      font:'inherit',
      border:'1px solid blue',
      cursor:'pointer',
    
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
         <div>
            {this.state.persons.map((person, index) => {
              return <Person 
                  click={() => this.deletePersonHandler(index)}
                  name={person.name} 
                  age={person.age}
                  key={person.id}
                  changed={(event) => this.nameChangedHandler(event, person.id)} /> 
             })}
        
          </div> 

        );
        style.backgroundColor = 'red';
      
    }

    const classes = [];
    if(this.state.persons.length <= 3) {
       classes.push('red'); //classes = ['red']
    }
    if(this.state.persons.length <= 2) {
      classes.push('bold'); // classes = ['red']
    }
    if(this.state.persons.length <= 1) {
      classes.push('underline');
    }
 

    return(
        <div className='App'>
          <h1>Hi, I'm a React App!</h1>
          <p className= {classes.join(' ')}>This is really working!</p>
          <button 
            style={style}
          onClick={this.togglePersonsHandler}>Toggle Person</button>
          {persons}
          <input type='text' 
            onChange={this.inputChangeHandler} 
            value={this.state.userInput}/>
          <p>{this.state.userInput}</p>
        </div>
      );
  }
}

export default App;


