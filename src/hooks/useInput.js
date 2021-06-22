import { useState } from "react";

const useInput = () => {
  const [value, setValue] = useState("");

  const onChange = ({ target }) => {
    setValue(target.value);
  };
  return { value, onChange };
};

export default useInput;
