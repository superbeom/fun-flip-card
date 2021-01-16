import React, { useState, createContext, useContext } from "react";

export const BonusContext = createContext([{}, () => {}]);

export const BonusProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  /* Toggle Open */
  const toggleOpen = () => {
    try {
      setOpen((curOpen) => !curOpen);
    } catch (error) {
      console.log("Error @toggleOpen_BonusContext: ", error.message);
    }
  };

  /* Close Open */
  const closeOpen = () => {
    try {
      setOpen((curOpen) => false);
    } catch (error) {
      console.log("Error @closeOpen_BonusContext: ", error.message);
    }
  };

  return (
    <BonusContext.Provider
      value={{
        open,
        toggleOpen,
        closeOpen,
      }}
    >
      {children}
    </BonusContext.Provider>
  );
};

export const useOpen = () => {
  const { open } = useContext(BonusContext);
  return open;
};

export const useToggleOpen = () => {
  const { toggleOpen } = useContext(BonusContext);
  return toggleOpen;
};

export const useCloseOpen = () => {
  const { closeOpen } = useContext(BonusContext);
  return closeOpen;
};
