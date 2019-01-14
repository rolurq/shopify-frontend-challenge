import * as React from 'react';
import './SearchResult.css';

interface Props {
  title: string;
  body: string;
}

const defaultProps = Object.freeze({ favourite: false });

export default class SearchResult extends React.Component<
  Props & typeof defaultProps
> {
  static readonly defaultProps = defaultProps;

  render() {
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
