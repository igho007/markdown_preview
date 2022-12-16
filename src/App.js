import React, { useState } from "react";
import { marked } from "marked";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  marked.setOptions({ breaks: true });
  const [text, setText] = useState(`
  # H1
  ## H2
   [title](https://www.example.com)
   1. First item
   2. Second item
  3. Third item
  \`code\`
  	> blockquote
    	![alt text](image.jpg)

\`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`
**bold text**

  `);
  const handleChange = (e) => setText(e.target.value);

  const markedText = marked(text);

  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-md-4 mx-2">
          <textarea
            name="editor"
            id="editor"
            cols="30"
            rows="10"
            className="form-control"
            onChange={handleChange}
            value={text}
          ></textarea>
        </div>
        <div
          id="preview"
          className="col-md-4 h-100 bg-info rounded-2"
          dangerouslySetInnerHTML={{ __html: markedText }}
        ></div>
      </div>
    </div>
  );
};

export default App;
