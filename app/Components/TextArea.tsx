import React from "react";

const TextArea = () => {
  return (
    <>
      <label className="form-control p-12">
        <div className="label">
          <span className="label-text flex justify-center text-center">
            Thanks for visiting my website!
          </span>
          <span className="label-text-alt">Alt label</span>
        </div>
        <textarea
          className="textarea textarea-bordered h-24"
          placeholder="Bio"
        ></textarea>
        <div className="label">
          <span className="label-text-alt">Your bio</span>
          <span className="label-text-alt">Alt label</span>
        </div>
      </label>
    </>
  );
};

export default TextArea;
