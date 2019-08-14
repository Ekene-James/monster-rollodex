import React, { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/searchbox/SearchBox";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users =>
        this.setState({
          monsters: users
        })
      );
  }
  render() {
    const { monsters, searchField } = this.state;
    const searchValue = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolledex</h1>
        <SearchBox
          placeHolder="search"
          event={e =>
            this.setState({
              searchField: e.target.value
            })
          }
        />

        <CardList monsters={searchValue} />
      </div>
    );
  }
}

export default App;
