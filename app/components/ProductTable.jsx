import React from "react";

// Components
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

class ProductTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const rows = [];
    let lastCategory = null;
    // const filterText = this.props.filterText;
    const filterText = "7";
    // const inStockOnly = this.props.inStockOnly;
    const inStockOnly = true;

    let results = this.props.products.filter(product => {
      // When there's a term to search for
      if (filterText !== "" && filterText !== null) {
        // And the checkbox is checked
        if (inStockOnly) {
          return product.name.includes(filterText) && product.stocked ? product : null;
          // And the checkbox isn't checked
        } else {
          return product.name.includes(filterText);
        }
        // When there's no term to search for
      } else if (filterText === "" || filterText === null) {
        // And the checkbox is checked
        if (inStockOnly) {
          return product.stocked ? product : null;
          // And the checkbox isn't checked
        } else {
          return this.props.products;
        }
      }
    });

    results.forEach(product => {
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });

    return (
      <>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </>
    );
  }
}

export default ProductTable;
