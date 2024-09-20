import React from 'react';

interface JSONRenderer {
  htmlContent: string;
}

const JSONRenderer: React.FC<JSONRenderer> = ({ htmlContent }) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: htmlContent }}
  />
);
};

export default JSONRenderer;
