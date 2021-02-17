import React from "react";

import { CustomButtonContainer } from "./CustomButtonStyles";

const CustomButton = (props) => {
  return (
    <CustomButtonContainer {...props}>{props.children}</CustomButtonContainer>
  );
};

export default CustomButton;
