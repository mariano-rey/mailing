import "./inputs.css";
import styled from "styled-components";
import { guidGenerator } from "../../../util/math";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type Props = { label?: string } & InputProps;

const Div = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  border: 1px solid white;
  border-radius: 4px;
  margin-top: 8px;
  margin-bottom: 8px;
`;

export default (props: Props): JSX.Element => {
  const id = guidGenerator();
  return (
    <Div>
      <label htmlFor={id}>{props.label || props.placeholder}: </label>
      <input {...props} type="text" id={id} />
    </Div>
  );
};
