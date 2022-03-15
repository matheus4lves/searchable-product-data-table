import React from "react";

// Components
import SearchBar from "./components/SearchBar";
import ProductTable from "./components/ProductTable";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </>
    );
  }
}

export default Main;
