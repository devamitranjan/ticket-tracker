import React from "react";
import styled from "styled-components";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type: "primary" | "secondary" | "danger" | "success";
}

const Button: React.FC<ButtonProps> = (props) => {
  const { type, ...buttonProps } = props;
  const $color = React.useMemo(() => {
    switch (type) {
      case "primary":
        return "#1976D2";
      case "danger":
        return "#dc3545";
      case "secondary":
        return "#fff";
      case "success":
        return "#28a745";
      default:
        return "#1976D2";
    }
  }, [type]);
  return (
    <StyledButton {...buttonProps} $color={$color} $type={type}></StyledButton>
  );
};

const StyledButton = styled.button<{ $color: string; $type: string }>`
  padding: 0.5rem 1rem;
  color: #fff;
  background-color: ${(props) => props.$color};
  color: ${({ $type }) => ($type === "secondary" ? `#1976D2;` : ` #fff;`)};
  border-radius: 0.5rem;
  border-color: ${(props) => props.$color};
  margin: 1.5rem 0.1rem;
  float: right;
  font-size: 1rem;
  font-family: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
  cursor: pointer;
  border-style: hidden;
`;

export default Button;
