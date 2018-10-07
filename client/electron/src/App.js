import React, { Component } from 'react';
import logo from './logo.svg';
import BookComponent from './Components/BookComponent/Book';

class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css"/>
          </header>
          <BookComponent/>
        </div>
    );
  }
}

export default App;
