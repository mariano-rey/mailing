import * as ReactQuill from "react-quill";
import * as Quill from "quill";
import "react-quill/dist/quill.snow.css";

interface IEditor {
  onChange: (
    content: string,
    delta: Quill.Delta,
    source: Quill.Sources
  ) => void;
  text: string;
  placeholder?: string;
}

export default (props: IEditor): React.ReactElement => {
  const { onChange, text, placeholder } = props;
  return (
    <ReactQuill.default
      placeholder={placeholder}
      theme="snow"
      value={text}
      onChange={onChange}
    />
  );
};
