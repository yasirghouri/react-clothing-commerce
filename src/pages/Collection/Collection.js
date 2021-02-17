import React from "react";
import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shopSelectors";
import CollectionItem from "../../components/CollectionItem/CollectionItem";
import {
  CollectionContainer,
  TitleContainer,
  ItemsContainer,
} from "./CollectionStyles";

const Collection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionContainer>
      <TitleContainer>{title}</TitleContainer>
      <ItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </ItemsContainer>
    </CollectionContainer>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    collection: selectCollection(ownProps.match.params.collectionId)(state),
  };
};

export default connect(mapStateToProps)(Collection);
