import { CSSProperties, MouseEventHandler, ReactNode } from "react";
import styled, { css } from "styled-components";
// import "./button.css";

interface Props {
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  block?: boolean;
  type?: "button" | "submit" | "reset";
  style?: CSSProperties;
  icon?: ReactNode;
}

const Button = styled.button<Partial<Props>>`
  width: 9em;
  height: 3em;
  font-size: 20px;
  border: none;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: pointer;
  &:before {
    content: "";
    width: 0;
    height: 3em;
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(to right, #0fd850 0%, #f9f047 100%);
    transition: 0.5s ease;
    display: block;
    z-index: -1;
  }
  &:hover::before {
    width: 9em;
  }
  ${(props) =>
    props.block &&
    css`
      &:hover::before {
        width: 60em;
      }
    `}
`;

export default ({ label, onClick, type, style, block }: Props): JSX.Element => (
  <Button block={block} onClick={onClick} type={type} style={style}>
    {label}
    <span></span>
  </Button>
);
