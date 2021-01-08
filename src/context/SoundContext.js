import React, { createContext, useContext } from "react";

export const SoundContext = createContext();

export const SoundProvider = ({ sound, children }) => {
  const playSound = async () => {
    try {
      await sound.playAsync();
    } catch (error) {
      console.log("Error @playSound_SoundContext: ", error.message);
    }
  };

  const stopSound = async () => {
    try {
      await sound.pauseAsync();
    } catch (error) {
      console.log("Error @stopSound_SoundContext: ", error.message);
    }
  };

  return (
    <SoundContext.Provider value={{ playSound, stopSound }}>
      {children}
    </SoundContext.Provider>
  );
};

export const usePlaySound = () => {
  const { playSound } = useContext(SoundContext);
  return playSound;
};

export const useStopSound = () => {
  const { stopSound } = useContext(SoundContext);
  return stopSound;
};
