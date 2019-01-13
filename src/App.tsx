import * as React from 'react';
import './App.css';

import Favourites from './components/Favourites';
import SearchBar from './components/SearchBar';

class App extends React.Component {
  public render() {
    return (
      <article className="App">
        <header className="App-header">
          <h1 className="App-title">Toronto Waste Lookup</h1>
        </header>
        <section className="App-intro">
          <SearchBar />
        </section>
        <Favourites />
      </article>
    );
  }
}

export default App;
