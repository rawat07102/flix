import React from "react";

// MUI Imports
import Slide from "@material-ui/core/Slide";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

const HideOnScroll = ({ children, classes }) => {
  const trigger = useScrollTrigger();
  return <Slide in={!trigger}>{children}</Slide>;
};

export default HideOnScroll;
