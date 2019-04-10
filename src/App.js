import React, { Component } from 'react';
import SearchBox from './Components/SearchBox';
import AppCss from './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
          <h1 className="app_title">Search Box</h1>
          <SearchBox/>
      </div>
    );
  }
}

export default App;
