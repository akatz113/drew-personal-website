import React from "react";
import TextArea from "../Components/TextArea";

const contactInfo = () => {
  return (
    <>
      <h1 className="py-12 text-primary text-center text-xl font-bold">
        Thanks for visiting my website!
      </h1>
      <TextArea />
      <img
        className="w-50 h-44"
        src="240052598-4SP.jpg"
        alt="Image of Drew Katz"
      />
    </>
  );
};

export default contactInfo;
