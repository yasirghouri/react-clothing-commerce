import React from "react";

import Directory from "../../components/Directory/Directory";
import { HomepageContainer } from "./HomepageStyles";

const Homepage = () => {
  return (
    <HomepageContainer className="homepage">
      <Directory />
    </HomepageContainer>
  );
};

export default Homepage;
