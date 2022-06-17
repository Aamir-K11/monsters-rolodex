import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

class App extends Component
{
  constructor() 
  {
    super();
    this.state = 
    {
      monsters: [],
      searchField : ''
    }
  }

  componentDidMount() 
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(entities => this.setState({monsters: entities}))
  }

  handleClick = (event) => {this.setState({searchField: event.target.value})}

  render() 
  {
    const { monsters, searchField } = this.state
    let filteredMonsters = monsters.filter(monster => {return monster.name.toLowerCase().includes(searchField.toLowerCase())})
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox holderText = 'Filter by Name' handleClick={this.handleClick}/>
        <CardList monsters = {filteredMonsters}/>
      </div>
    );
  }
}

export default App;
