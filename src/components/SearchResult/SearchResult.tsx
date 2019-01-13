import * as React from 'react';
import './SearchResult.css';

interface Props {
  title: string;
  body: string;
  favourite?: boolean;
}

export default class SearchResult extends React.Component<Props> {
  public render() {
    const { title, body, favourite } = this.props;

    return (
      <article className="SearchResult">
        <section>
          <i className={`icon-star${favourite ? ' marked' : ''}`} />
          {title}
        </section>
        <section
          dangerouslySetInnerHTML={{ __html: body }}
          className="SearchResult-body"
        />
      </article>
    );
  }
}
