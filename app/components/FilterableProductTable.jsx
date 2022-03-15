import React from "react";

// Components
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

import PRODUCTS from "../assets/data/data";

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <SearchBar />
        <ProductTable products={PRODUCTS} />
      </>
    );
  }
}

export default FilterableProductTable;
