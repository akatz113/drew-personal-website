import React from "react";

const resumeFile =
  "Drew Katz/drew-personal-website/public/Resume - Andrew Katz (2024).pdf";

const ResumeDownload = () => {
  return (
    <div>
      <button className="btn btn-outline rounded-xl btn-secondary">
        <a href={resumeFile} download="myResume">
          Download Resume
        </a>
      </button>
    </div>
  );
};

export default ResumeDownload;
