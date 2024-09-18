import React from "react";

import { Option } from "./types";
import "./GenericSelector.css";

type GenericSelectorProps = {
  id: string;
  placeholder: string;
  options: Option[];
};

const GenericSelector: React.FC<GenericSelectorProps> = ({
  id,
  placeholder,
  options,
}) => {
  return (
    <select
      className="generic-select"
      id={id}
      name={id}
      required
      defaultValue="placeholder"
    >
      <option value="placeholder" disabled>
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default GenericSelector;
