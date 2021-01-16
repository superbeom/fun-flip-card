import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { vw, vh } from "react-native-expo-viewport-units";

import { useGameInfo } from "../../context/GameContext";

export default () => {
  const { stage } = useGameInfo();

  return (
    <>
      {stage > 66 && (
        <View style={styles.bushContainer}>
          <Image
            source={require("../../../assets/images/animal_1_bush.png")}
            style={styles.content}
            resizeMode={"stretch"}
          />
        </View>
      )}

      {stage > 133 && (
        <View style={styles.flowerContainer}>
          <Image
            source={require("../../../assets/images/animal_2_flower.png")}
            style={styles.content}
            resizeMode={"cover"}
          />
        </View>
      )}

      {stage > 200 && (
        <View style={styles.squirrelContainer}>
          <Image
            source={require("../../../assets/images/animal_3_squirrel.png")}
            style={styles.content}
            resizeMode={"cover"}
          />
        </View>
      )}

      {stage > 267 && (
        <View style={styles.donkeyContainer}>
          <Image
            source={require("../../../assets/images/animal_4_donkey.png")}
            style={styles.content}
            resizeMode={"cover"}
          />
        </View>
      )}

      {stage > 334 && (
        <View style={styles.flamingoContainer}>
          <Image
            source={require("../../../assets/images/animal_5_flamingo.png")}
            style={styles.content}
            resizeMode={"cover"}
          />
        </View>
      )}

      {stage > 401 && (
        <View style={styles.elephantContainer}>
          <Image
            source={require("../../../assets/images/animal_6_elephant.png")}
            style={styles.content}
            resizeMode={"cover"}
          />
        </View>
      )}

      {stage > 468 && (
        <View style={styles.slothContainer}>
          <Image
            source={require("../../../assets/images/animal_7_sloth.png")}
            style={styles.content}
            resizeMode={"cover"}
          />
        </View>
      )}

      {stage > 535 && (
        <View style={styles.lionContainer}>
          <Image
            source={require("../../../assets/images/animal_8_lion.png")}
            style={styles.content}
            resizeMode={"cover"}
          />
        </View>
      )}

      {stage > 602 && (
        <View style={styles.racoonContainer}>
          <Image
            source={require("../../../assets/images/animal_9_racoon.png")}
            style={styles.content}
            resizeMode={"cover"}
          />
        </View>
      )}

      {stage > 669 && (
        <View style={styles.pandaContainer}>
          <Image
            source={require("../../../assets/images/animal_10_panda.png")}
            style={styles.content}
            resizeMode={"cover"}
          />
        </View>
      )}

      {stage > 736 && (
        <View style={styles.hippoContainer}>
          <Image
            source={require("../../../assets/images/animal_11_hippo.png")}
            style={styles.content}
            resizeMode={"cover"}
          />
        </View>
      )}

      {stage > 803 && (
        <View style={styles.monkeyContainer}>
          <Image
            source={require("../../../assets/images/animal_12_monkey.png")}
            style={styles.content}
            resizeMode={"cover"}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    width: "100%",
    height: "100%",
  },
  bushContainer: {
    position: "absolute",
    bottom: vh(1),
    width: "100%",
    height: vh(10),
    zIndex: -2,
    elevation: 6,
  },
  flowerContainer: {
    position: "absolute",
    left: vw(5),
    bottom: vh(2),
    width: vw(20),
    height: vw(20),
    zIndex: -5,
    elevation: 6,
  },
  squirrelContainer: {
    position: "absolute",
    left: vw(52),
    bottom: vh(2),
    width: vw(12),
    height: vw(12),
    zIndex: -5,
    elevation: 6,
  },
  donkeyContainer: {
    position: "absolute",
    right: vw(5),
    bottom: vh(20),
    width: vw(20),
    height: vw(20),
    zIndex: -5,
    elevation: 6,
  },
  flamingoContainer: {
    position: "absolute",
    top: -vh(6),
    left: vw(5),
    width: vw(25),
    height: vw(12),
    zIndex: 15,
    elevation: 15,
  },
  elephantContainer: {
    position: "absolute",
    left: vw(7),
    bottom: vh(15),
    width: vw(30),
    height: vw(30),
    zIndex: -5,
    elevation: 6,
  },
  slothContainer: {
    position: "absolute",
    top: vh(13),
    right: vw(0),
    width: vw(20),
    height: vw(20),
    zIndex: -5,
    elevation: 6,
  },
  lionContainer: {
    position: "absolute",
    right: -vw(3),
    bottom: vh(2),
    width: vw(30),
    height: vw(30),
    zIndex: -5,
    elevation: 6,
  },
  racoonContainer: {
    position: "absolute",
    left: vw(30),
    bottom: vh(2),
    width: vw(18),
    height: vw(18),
    zIndex: -5,
    elevation: 6,
  },
  pandaContainer: {
    position: "absolute",
    top: vh(3),
    left: vw(42),
    width: vw(22),
    height: vw(22),
    zIndex: -5,
    elevation: 6,
  },
  hippoContainer: {
    position: "absolute",
    left: vw(41),
    bottom: vh(14),
    width: vw(20),
    height: vw(20),
    zIndex: -5,
    elevation: 6,
  },
  monkeyContainer: {
    position: "absolute",
    left: vw(40),
    top: vh(25),
    width: vw(20),
    height: vw(20),
    zIndex: 5,
    elevation: 5,
  },
});
