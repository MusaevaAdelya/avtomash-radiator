import React from "react";

function AboutUsItem({ children, title, subtitle }) {
  return (
    <div className="max-w-[300px] mx-auto space-y-4">
      {children}
      <h5 className="text-2xl font-semibold text-dark-400">{title}</h5>
      <p className="text-lg font-medium text-dark-200">{subtitle}</p>
    </div>
  );
}

export default AboutUsItem;
