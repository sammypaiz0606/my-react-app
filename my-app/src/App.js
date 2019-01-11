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
    ], 
    persons2: [
      {name:'Litzy', age:15},
      {name:'Marlene', age:27}
    ],
    showPersons: false
    
   
  }

switchNameHandler = (newName) => {
  //this.state.persons[0].name = 'Sammy';
  this.setState({
      persons:[
        {name: newName, age: 28},
        {name:'Glenda', age:39},
        {name:'Ariana', age:4},
        {name:'Christian', age: 35},
        {name:'Wil', age:35}
      ]
  })
}

switchNameHandler2 = () => {
  this.setState({
    persons2: [
      {name:'Litzy Cancino', age:16},
      {name:'Marlene Paiz', age:30}
    ]
  })
}
nameChangedHandler = (event) => {
  this.setState({
      persons: [
        {name: 'Sam', age: 28},
        {name: event.target.value, age:39},
        {name: 'Ariana', age:4},
        {name: 'Christian', age: 35},
        {name: 'Wil', age:35}
      ]
  })
}
togglePersonsHandler =() => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
}

  render() {
    const addStyle = {
      backgroundColor: 'white',
      padding:'8px',
      font:'inherit',
      border:'1px solid blue',
      cursor:'pointer'
    };
    return(
      <div className='App'>
        <h1>Hi, I'm a React App!</h1>
        <p>This is really working!</p>
        <button 
          style={addStyle}
        onClick={this.togglePersonsHandler}>Toggle Person</button>
       

       {
        this.state.showPersons ?
          <div>
             <Person 
               name={this.state.persons[0].name}
               age={this.state.persons[0].age}/>
             <Person 
               name={this.state.persons[1].name} 
               age={this.state.persons[1].age} />
             <Person 
               name={this.state.persons[2].name} 
               age={this.state.persons[2].age} />
             <Person 
                name={this.state.persons[3].name}
                age={this.state.persons[3].age}
                click={this.switchNameHandler.bind(this, 'Sam!')}
                changed={this.nameChangedHandler}
               >My hobbies: Research!</Person>
              <Person 
                name={this.state.persons[4].name} 
                age={this.state.persons[4].age} />
              <Person 
                name={this.state.persons2[0].name} 
                age={this.state.persons2[0].age} />
              <Person 
                name={this.state.persons2[1].name} 
                age={this.state.persons2[1].age} />
              <button 
             style={addStyle}
             onClick={this.switchNameHandler2}>switch name</button>
            </div> : null
         }


           
       
      </div>
      );
  }
}

export default App;


