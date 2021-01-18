import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  BackHandler,
  Platform,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { AdMobBanner } from "expo-ads-admob";
import { vw, vh } from "react-native-expo-viewport-units";

import admob from "../../config/admob";

import { useGameInfo } from "../../context/GameContext";

import colors from "../../constants/colors";
import { HOME } from "../../constants/strings";

import Header from "../../components/Header";
import Card from "../../components/Card";
import Heart from "../../components/Heart";
import Button from "../../components/Button";

const Content = ({ onPress, bonusStage }) => (
  <TouchableOpacity
    style={styles.cardContainer}
    onPress={onPress}
    activeOpacity={0.5}
  >
    <Card style={styles.card}>
      <Text style={styles.bonusText}>{bonusStage}</Text>
    </Card>
  </TouchableOpacity>
);

export default ({ navigation }) => {
  const { heart } = useGameInfo();

  const backAction = () => {
    navigation.navigate(HOME);

    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

  return (
    <ImageBackground
      style={styles.screen}
      source={require("../../../assets/images/background.png")}
    >
      <StatusBar hidden={true} />
      <Header title={""} />

      <View style={styles.body}>
        <View style={styles.heartBox}>
          <Heart onPress={() => null} numOfHeart={heart} disabled={true} />
        </View>

        <Content onPress={() => null} bonusStage={"3 x 3"} />
        <Content onPress={() => null} bonusStage={"4 x 4"} />
        <Content onPress={() => null} bonusStage={"5 x 5"} />
        <Content onPress={() => null} bonusStage={"6 x 6"} />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          onPress={() => navigation.navigate(HOME)}
          content={"home"}
          size={vw(20)}
          activeOpacity={0.9}
        />
      </View>

      <View style={styles.ads}>
        <AdMobBanner
          bannerSize="banner"
          adUnitID={
            Platform.OS === "ios"
              ? admob.bannerIosAdUnitId
              : admob.bannerAndroidAdUnitId
          }
          servePersonalizedAds={true}
          onDidFailToReceiveAdWithError={this.bannerError}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  body: {
    flex: 11,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingRight: vw(10),
  },
  ads: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
  },
  heartBox: {
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginRight: vw(3),
    marginBottom: vh(5),
  },
  cardContainer: {
    width: "60%",
    height: vh(10),
    marginBottom: vh(5),
  },
  card: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  bonusText: {
    fontSize: vw(8),
    fontWeight: "500",
    color: colors.blackColor,
  },
});
