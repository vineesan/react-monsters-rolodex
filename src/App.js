import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      monsters:[],
      searchList: ''
    }
  }
  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(responce => responce.json())
    .then(user => this.setState({monsters: user}))
  }

  handelChange = (e) => {
    this.setState({searchList:e.target.value})
  }

  render() {
    const {monsters, searchList} = this.state;
    const filteredMonster = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchList.toLowerCase())
    )
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder="Search Monster" handelChange={this.handelChange}></SearchBox>
        <CardList monsters={filteredMonster}></CardList>
      </div>
    );
  }
}

export default App;
