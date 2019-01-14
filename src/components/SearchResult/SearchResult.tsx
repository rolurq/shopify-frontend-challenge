// import * as DOMPurify from 'dompurify';
import * as React from 'react';
import './SearchResult.css';

import { SearchResult as ResultModel } from '../../models';

export interface DispatchProps {
  markFavourite(result: ResultModel): void;
  unmarkFavourite(key: string): void;
}

export interface StateProps {
  favourites: Map<string, ResultModel>;
}

interface OwnProps {
  result: ResultModel;
}

type Props = DispatchProps & StateProps & OwnProps;

export default class SearchResult extends React.Component<Props> {
  htmlDecode(content: string) {
    const e = document.createElement('div');
    e.innerHTML = content;
    return e.childNodes.length === 0 ? '' : e.childNodes[0].nodeValue!;
  }

  handleStarClick = () => {
    const { result, markFavourite, unmarkFavourite } = this.props;
    if (this.isFavourite()) {
      unmarkFavourite(result.title);
    } else {
      markFavourite(result);
    }
    this.setState({}); // perform a re-rendering to change the star color
  };

  isFavourite() {
    const { favourites, result } = this.props;
    return favourites.has(result.title);
  }

  render() {
    const { result } = this.props;

    return (
      <article className="SearchResult">
        <section>
          <i
            className={`icon-star${this.isFavourite() ? ' marked' : ''}`}
            onClick={this.handleStarClick}
          />
          {result.title}
        </section>
        <section
          dangerouslySetInnerHTML={{
            __html: this.htmlDecode(result.body),
          }}
          className="SearchResult-body"
        />
      </article>
    );
  }
}
