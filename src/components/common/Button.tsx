import styled from "styled-components";
import { ButtonScheme, ButtonSize } from "../../style/theme";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size: ButtonSize;
  scheme: ButtonScheme;
  disabled?: boolean;
}

interface StyledButtonProps {
  $size: ButtonSize;
  $scheme: ButtonScheme;
}

const Button = ({
  children,
  disabled,
  scheme,
  size,
  ...props
}: ButtonProps) => {
  return (
    <ButtonStyle $size={size} disabled={disabled} $scheme={scheme} {...props}>
      {children}
    </ButtonStyle>
  );
};

const ButtonStyle = styled.button<StyledButtonProps>`
  font-size: ${({ theme, $size }) => theme.button[$size].fontSize};
  padding: ${({ theme, $size }) => theme.button[$size].padding};
  color: ${({ theme, $scheme }) => theme.buttonScheme[$scheme].color};
  background-color: ${({ theme, $scheme }) =>
    theme.buttonScheme[$scheme].backgroundColor};
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  cursor: ${({ disabled }) => (disabled ? "none" : "pointer")};
`;

export default Button;
