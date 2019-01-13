import * as React from 'react';
import './App.css';

import Favourites from './components/Favourites';
import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult';

class App extends React.Component {
  public render() {
    return (
      <article className="App">
        <header className="App-header">
          <h1 className="App-title">Toronto Waste Lookup</h1>
        </header>
        <section className="App-intro">
          <SearchBar />
          <SearchResult
            title="Garbage (wrapping and tying)"
            body=" &lt;li&gt;Place item in the &lt;strong&gt;Garbage Bin.&lt;/strong&gt;&lt;/li&gt;
            &lt;/ul&gt;"
          />
        </section>
        <Favourites />
      </article>
    );
  }
}

export default App;
