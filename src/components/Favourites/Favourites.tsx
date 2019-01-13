import * as React from 'react';
import './Favourites.css';

import SearchResult from '../SearchResult';

export default function Favourites() {
  return (
    <footer className="Favourites">
      <h2 className="Favourites-title">Favourites</h2>
      <SearchResult
        title="Blue Bin (auto-related plastic bottle)"
        body=" &lt;li&gt;Place this empty and rinsed item in the&amp;nbsp;&lt;strong&gt;Blue Bin&lt;/strong&gt;.&lt;/li&gt;
        &lt;/ul&gt;"
        favourite={true}
      />
    </footer>
  );
}
