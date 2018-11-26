import React, { Component } from "react";
import { friends } from "./friends";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import "./App.css"

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: friends,
      searchfields: ''
    };
  }

  onSearchChange = e => {
    this.setState({ searchfields: e.target.value });
  }

  render() {
    const filteredFriends = this.state.friends.filter(friend => {
        return friend.name.toLowerCase().includes(this.state.searchfields.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1">Friend List</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList friends={filteredFriends} />
      </div>
    );
  }
}

export default App;
