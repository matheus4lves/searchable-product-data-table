import React from "react";

class ProductCategoryRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const category = this.props.catagory;

    return (
      <>
        <tr>
          <th colSpan={2}>{category}</th>
        </tr>
      </>
    );
  }
}

export default ProductCategoryRow;
