import * as React from 'react';
import './SearchBar.css';

export default class SearchBar extends React.Component {
  public render() {
    return (
      <header className="SearchBar-bar">
        <input type="text" name="" id="" className="SearchBar-input" />
        <button>search</button>
      </header>
    );
  }
}
