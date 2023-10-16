'use client'
import { useState } from "react";
import ChildComponent from "./Children/Text";

const ParentComponent = () => {
  const [children, setChildren] = useState([]);

  const handleButtonClick = () => {
    setChildren([...children, <ChildComponent />]);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Add Child Component</button>
      {children.map((child, index) => (
        <div key={index}>{child}</div>
      ))}
    </div>
  );
};

export default ParentComponent;