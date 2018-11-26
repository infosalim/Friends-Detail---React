import React, { Component } from "react";
import { friends } from "./../friends";
import CardList from "./../components/CardList";
import SearchBox from "./../components/SearchBox";
import "./App.css";
import Scroll from './../components/Scroll';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      searchfields: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {
        this.setState({ friends: friends });
      });
  }

  onSearchChange = e => {
    this.setState({ searchfields: e.target.value });
  };

  render() {
    const { friends, searchfields } = this.state;
    const filteredFriends = friends.filter(friend => {
      return friend.name
        .toLowerCase()
        .includes( searchfields.toLowerCase());
    });

    return !friends.length ? <h1>Loading</h1> :
      (
        <div className="tc">
          <h1 className="f1">Friend List</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList friends={filteredFriends} />
          </Scroll>
        </div>
      );
    }
}

export default App;
