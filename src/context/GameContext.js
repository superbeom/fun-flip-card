import React, { useState, createContext, useContext, useRef } from "react";
import AsyncStorage from "@react-native-community/async-storage";

export const GameContext = createContext([{}, () => {}]);

export const GameProvider = ({ gameInfo: gameInfoProp, children }) => {
  const [gameInfo, setGameInfo] = useState(gameInfoProp);
  const tempHeart = useRef(0);

  /* stage +1 업데이트 */
  const nextStage = async () => {
    try {
      /* Update Stage Info on Screen */
      setGameInfo((curState) => ({
        ...curState,
        stage: curState.stage + 1,
      }));

      /* Store Stage Info to Local */
      await AsyncStorage.setItem("stage", JSON.stringify(gameInfo.stage + 1));
    } catch (error) {
      console.log("Error @nextStage_GameContext: ", error.message);
    }
  };

  /* horizontalNum +1 업데이트 */
  const plusHorizontalNum = async () => {
    try {
      /* Update HorizontalNum Info on Screen */
      setGameInfo((curState) => ({
        ...curState,
        horizontalNum: curState.horizontalNum + 1,
      }));

      /* Store HorizontalNum Info to Local */
      await AsyncStorage.setItem(
        "horizontalNum",
        JSON.stringify(gameInfo.horizontalNum + 1)
      );
    } catch (error) {
      console.log("Error @plusHorizontalNum_GameContext: ", error.message);
    }
  };

  /* heart 갯수 -1 업데이트 */
  const minusHeart = async () => {
    try {
      /* Update Heart Info on Screen */
      setGameInfo((curState) => ({
        ...curState,
        heart: curState.heart - 1,
      }));

      /* Store Heart Info to Local */
      await AsyncStorage.setItem("heart", JSON.stringify(gameInfo.heart - 1));
    } catch (error) {
      console.log("Error @minusHeart_GameContext: ", error.message);
    }
  };

  /* heart 갯수 (+plusNum) 업데이트 */
  const plusHeart = async (plusNum) => {
    try {
      tempHeart.current = tempHeart.current + plusNum;

      /* Update Heart Info on Screen */
      setGameInfo((curState) => ({
        ...curState,
        heart: curState.heart + plusNum,
      }));

      /* Store Heart Info to Local */
      await AsyncStorage.setItem(
        "heart",
        JSON.stringify(gameInfo.heart + tempHeart.current)
      );
    } catch (error) {
      console.log("Error @plusHeart_GameContext: ", error.message);
    }
  };

  /* Game End */
  const setGameEnd = async () => {
    try {
      /* Update GameEnd Info on Screen */
      setGameInfo((curState) => ({
        ...curState,
        gameEnd: true,
      }));

      /* Store GameEnd Info to Local */
      await AsyncStorage.setItem("gameEnd", JSON.stringify(true));
    } catch (error) {
      console.log("Error @setGameEnd_GameContext: ", error.message);
    }
  };

  return (
    <GameContext.Provider
      value={{
        gameInfo,
        nextStage,
        plusHorizontalNum,
        minusHeart,
        plusHeart,
        setGameEnd,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameInfo = () => {
  const { gameInfo } = useContext(GameContext);
  return gameInfo;
};

export const useNextStage = () => {
  const { nextStage } = useContext(GameContext);
  return nextStage;
};

export const usePlusHorizontalNum = () => {
  const { plusHorizontalNum } = useContext(GameContext);
  return plusHorizontalNum;
};

export const useMinusHeart = () => {
  const { minusHeart } = useContext(GameContext);
  return minusHeart;
};

export const usePlusHeart = () => {
  const { plusHeart } = useContext(GameContext);
  return plusHeart;
};

export const useSetGameEnd = () => {
  const { setGameEnd } = useContext(GameContext);
  return setGameEnd;
};
