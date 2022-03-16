import React from "react";

// Components
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

import PRODUCTS from "../assets/data/data";

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filterText: "", inStockOnly: false };
  }

  render() {
    return (
      <>
        <SearchBar filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} />
        <ProductTable products={PRODUCTS} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} />
      </>
    );
  }
}

export default FilterableProductTable;
