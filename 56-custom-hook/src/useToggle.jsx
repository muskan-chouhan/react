import { useState } from "react";

const useToggle = (defaultValue = false) => {
  const [value, setValue] = useState(defaultValue);

  function toggleValue(val) {
    if (typeof val === "boolean") {
      setValue(val);          // true / false direct set
    } else {
      setValue(!value);       // sirf toggle
    }
  }

  return [value, toggleValue];
};

export default useToggle;
