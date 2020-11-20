import "./App.css";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Pagination,
  Stats,
} from "react-instantsearch-dom";
// KFWXVJ2EGD
// 181bd9ae00288f8d180146531f1358f1
// posts
const searchClient = algoliasearch(
  "KFWXVJ2EGD",
  "181bd9ae00288f8d180146531f1358f1"
);
function App() {
  return (
    <InstantSearch searchClient={searchClient} indexName="products">
      <div className="app">
        <div className="search-container">
          <SearchBox />
          <Hits hitComponent={Product} />
          <Stats />
          <Pagination />
        </div>
      </div>
    </InstantSearch>
  );
}

function Product({ hit }) {
  return (
    <a
      className="product"
      href={hit.url}
      traget="_blank"
      rel="noopener noreferrer"
    >
      <img src={hit.image} alt={hit.name} />
      <div>
        <h3>{hit.brand}</h3>
        <h2>{hit.name}</h2>
        <p>${hit.price}</p>
      </div>
    </a>
  );
}

export default App;
