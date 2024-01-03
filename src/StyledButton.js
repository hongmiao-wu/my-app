import React from 'react';
import { useStyletron } from 'baseui';
import { Button } from "baseui/button";

const StyledButton = () => {
  // Destructuring the css function and theme from useStyletron
  const [css, theme] = useStyletron();
  return (
    <Button onClick={() => alert("click")}>Hello</Button>
  );
};

export default StyledButton;
