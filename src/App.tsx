import * as React from 'react';
import './App.css';

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
        <footer>Favourites</footer>
      </article>
    );
  }
}

export default App;
