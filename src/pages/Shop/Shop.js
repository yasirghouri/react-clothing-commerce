import React, { Component } from "react";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";

import Shop_Data from "./Shop.Data";

export class Shop extends Component {
  state = {
    collections: Shop_Data,
  };
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
