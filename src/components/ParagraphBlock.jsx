import React from "react";

function ParagraphBlock({ title, text }) {
  return (
    <div className="space-y-2">
      <h4 className="text-2xl font-semibold text-dark-400 md:text-4xl lg:leading-10">
        {title}
      </h4>
      <p className="w-full text-base font-medium whitespace-pre-line lg:w-4/5 md:text-lg text-dark-200">
        {text}
      </p>
    </div>
  );
}

export default ParagraphBlock;
