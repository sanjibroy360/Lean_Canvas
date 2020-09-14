import React from 'react';
import ReactMarkdown from "react-markdown";

function Preview({source, enablePreview, handlePreview}) {
    return (
        <div>
           <div className="card preview_text">
            <ReactMarkdown source={source} escapeHtml={false} />
            <input
              type="checkbox"
              name="preview"
              checked={enablePreview}
              onChange={handlePreview}
            />
            <span className="small_text">Preview text</span>
          </div> 
        </div>
    );
}

export default Preview;