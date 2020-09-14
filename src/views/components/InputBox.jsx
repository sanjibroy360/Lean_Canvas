import React from "react";

function InputBox(props) {
  let {
    pointInfo,
    value,
    enablePreview,
    handleSubmit,
    handlePreview,
    closeInputBox,
    handleInput,
    textareaName,
  } = props;
  return (
    <div className="input_point">
      <textarea
        name={textareaName}
        value={value}
        rows="3"
        onChange={handleInput}
      ></textarea>
      {value.trim() && (
        <>
          <input
            type="checkbox"
            name="preview"
            checked={enablePreview}
            onChange={handlePreview}
          />
          <span className="small_text">Preview text</span>
        </>
      )}

      <div className="btn_wrapper">
        <button
          type="submit"
          onClick={(event) => handleSubmit(event, pointInfo)}
          className="btn save_btn"
        >
          Add
        </button>

        <button
          type="submit"
          onClick={closeInputBox}
          className="btn cancel_btn"
        >
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>
  );
}

export default InputBox;
