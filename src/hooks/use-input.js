import { useState } from 'react';

const useInput = (validate) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false)

  const isValValid = validate(value);
  const hasError = !isValValid && isTouched;


  const handleValChange = (event) => {
    setValue(event.target.value);
  };

  const handleBlurChange = (event) =>
  {
    setIsTouched(true);
  };

  const reset = () =>
  {
      setIsTouched(false);
      setValue("");
  }
  return {
    value,
    handleValChange,
    handleBlurChange,
    reset,
    hasError,
    isValValid,
  };
}

export default useInput;