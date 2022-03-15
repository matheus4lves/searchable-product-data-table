import React from "react";

// Components
import FilterableProductTable from "./components/FilterableProductTable";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <FilterableProductTable />
      </>
    );
  }
}

export default Main;
