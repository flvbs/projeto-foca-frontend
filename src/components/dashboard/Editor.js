import React from "react";
import ReactQuill from "react-quill"; // ES6
import "react-quill/dist/quill.snow.css";

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" }; // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ text: value });
  }

  render() {
    console.log(this.state.text);
    
    return (
      <div className="text-editor">
        {/* <CustomToolbar /> */}
        <ReactQuill
          className="editor"
          value={this.state.text}
          onChange={this.handleChange}
          theme={"snow"}
          modules={{
            toolbar: toolbarOptions
          }}
        />
      </div>
    );
  }
}

const toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],
  ["image"],
  ["link"],

  [
    // [{ header: 1 }, { header: 2 }], // custom button values
    ({ list: "ordered" }, { list: "bullet" })
  ],
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction

  // [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],
  ["clean"] // remove formatting button
];

export default Editor;
