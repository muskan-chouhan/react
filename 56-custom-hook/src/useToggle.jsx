import { useState } from "react";

const useToggle = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  function toggleValue(val) {
    if (typeof val === "boolean") {
      setValue(! 
         
        value);      // show / hide
    } else {
      setValue(val);   // toggle
    }
  }

  return [value, toggleValue];
};

export default useToggle;
