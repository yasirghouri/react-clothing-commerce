import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import MenuItem from "../MenuItem/MenuItem";
import { selectDirectorySections } from "../../redux/directory/directorySelectors";
import { DirectoryMenuContainer } from "./DirectoryStyles";

const Directory = ({ sections }) => {
  return (
    <DirectoryMenuContainer>
      {sections.map(({ id, ...otherSectionProps }) => {
        return <MenuItem key={id} {...otherSectionProps} />;
      })}
    </DirectoryMenuContainer>
  );
};

export const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
