import { useState } from "react";

export const useShowElement = (initialValue) => {
  const [isShow, setShow] = useState(initialValue);

  const handleShow = () => setShow(true);

  const handleHidden = () => setShow(false);

  return { isShow, handleShow, handleHidden };
};
