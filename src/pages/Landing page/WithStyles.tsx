import React from "react";

interface WithStylesProps {
  description: string;
  headline: string;
  image: string;
}

const WithStyles: React.FC<WithStylesProps> = ({
  description,
  headline,
  image,
}) => {
  return (
    <div className="bg-slate-200 rounded-lg p-3 shadow-lg mb-6 mx-2 ">
      <img src={image} alt={headline} className="w-95 rounded-lg" />
      <div className="mt-3">
        <h3 className="text-lg font-semibold">{headline}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default WithStyles;
