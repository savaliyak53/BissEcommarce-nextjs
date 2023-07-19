import React from "react";

const UseModal = (initialopen = false) => {
  const [isOpen, setIsOpen] = React.useState(initialopen);

  const onRequestClose = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return {
    isOpen,
    onRequestClose,
    openModal,
  };
};

export default UseModal;
