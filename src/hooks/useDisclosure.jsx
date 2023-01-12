import { useState } from 'react';


const useDisclosure = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const toggle = () => setValue((value) => !value);

  return { isOpen: value, toggle };
};

export default useDisclosure;
