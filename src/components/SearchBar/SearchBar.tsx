import * as React from 'react';
import './SearchBar.css';

export interface DispatchProps {
  submitSearch(text: string): void;
  clearSearch(): void;
}

type Props = DispatchProps;

interface State {
  searchText: string;
}

export default class SearchBar extends React.Component<Props, State> {
  readonly state = {
    searchText: '',
  };

  render() {
    return (
      <form className="SearchBar-bar" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="search-text"
          id="search-text-input"
          className="SearchBar-input"
          onChange={this.handleInputChange}
        />
        <button type="submit" className="SearchBar-button">
          <i className="icon-search" />
        </button>
      </form>
    );
  }

  private handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = e.target.value;
    if (searchText.length === 0) {
      this.props.clearSearch();
    }
    this.setState({ searchText });
  };

  private handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.submitSearch(this.state.searchText);
  };
}
