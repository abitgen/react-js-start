import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import {CardList} from './components/card-list/card-list.component'

class App extends Component {
  constructor() {
    super();
    this.state = {
      names: [
        {
          name: "Sam",
          id: "A1"
        },
        {
          name: "Kim",
          id: "A2"
        },
        {
          name: "Tom",
          id: "A3"
        },
      ],
    };
  }


  render() {
    console.log(CardList)
    return (
      <div className="App">
        <CardList names={this.state.names}> </CardList>
        
      </div>
    );
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then( response => response.json())
    .then(json => this.setState({ names : json } ))
  }
}

function App2() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload 1.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
