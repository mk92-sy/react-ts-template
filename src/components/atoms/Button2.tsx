// src/components/Button.tsx

import React from "react";
import styled from "styled-components";
import { useTheme } from "../../styles/ThemeProvider";

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.background};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Button2: React.FC = () => {
  const { toggleTheme } = useTheme();

  return <StyledButton onClick={toggleTheme}>Toggle Theme</StyledButton>;
};

export default Button2;
