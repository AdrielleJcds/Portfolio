import React from 'react';
import '../style/Selection.css'; // Importa o CSS

const Selection = ({ title, subtitle }) => {
  return (
    <div className="selection-container">
      <h1 className="selection-title">{title}</h1>
      {subtitle && <p className="selection-subtitle">{subtitle}</p>}
      <div className="selection-divider"></div>
    </div>
  );
};

export default Selection;