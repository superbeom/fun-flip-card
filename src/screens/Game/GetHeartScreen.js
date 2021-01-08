import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { vw, vh } from "react-native-expo-viewport-units";
import CurrencyFormat from "react-currency-format";
import { AdMobRewarded } from "expo-ads-admob";

import admob from "../../config/admob";

import { usePlusHeart } from "../../context/GameContext";

import colors from "../../constants/colors";
import { HEART } from "../../utils/FontAwesomeSource";
import { COMING_SOON } from "../../constants/strings";

import Card from "../../components/Card";
import Heart from "../../components/Heart";
import Button from "../../components/Button";
import GetHeart from "../../components/GetHeart";
import Loader from "../../components/Loader";

let count = 0;
let reward = false;

const Content = ({ onPress, num, price, update }) => (
  <TouchableOpacity
    style={styles.cardContainer}
    onPress={onPress}
    activeOpacity={0.5}
    disabled={update}
  >
    <Card style={styles.card}>
      <View style={styles.heartBox}>
        {HEART}
        <Text style={styles.mulText}>X </Text>
        <Text style={styles.numText}>{num}</Text>
      </View>
      <View style={styles.priceBox}>
        <CurrencyFormat
          renderText={(value) => <Text style={styles.price}>{value}</Text>}
          decimalScale={2}
          value={price}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </View>
    </Card>
    {/* Overlay */}
    {update ? (
      <>
        <View style={styles.overlay} />
        <View style={styles.overlayTextContainer}>
          <Text style={styles.overlayText}>{COMING_SOON}</Text>
        </View>
      </>
    ) : null}
  </TouchableOpacity>
);

export default ({ closeModal, numOfHeart, checkReward, setCheckReward }) => {
  const plusHeart = usePlusHeart();
  const [checkClick, setCheckClick] = useState(false);

  /* 광고 시청 후 Reward */
  const getReward = () => {
    setCheckReward(false); // checkReward 초기화
    count = 0; // count 초기화
    reward = false; // reward 초기화

    plusHeart(5);
  };

  const getHeartFree = async () => {
    try {
      setCheckClick(true);
      count = 0; // count 초기화
      reward = false; // reward 초기화

      const adUnitID = Platform.select({
        ios: admob.rewardIosAdUnitId,
        android: admob.rewardAndroidAdUnitId,
      });

      // Display a rewarded ad
      await AdMobRewarded.setAdUnitID(adUnitID);
      await AdMobRewarded.requestAdAsync({ servePersonalizedAds: true });
      await AdMobRewarded.showAdAsync();
    } catch (error) {
      console.log("Error @getHeartFree_GetHeartScreen: ", error.message);
    }
  };

  useEffect(() => {
    AdMobRewarded.addEventListener("rewardedVideoDidStart", () => {
      setCheckClick(false);
    });

    AdMobRewarded.addEventListener("rewardedVideoDidRewardUser", () => {
      reward = true;
      /*
          광고 중간에 끄고 다시 광고 보면, 그 전까지 누적되어 Reward 되는 문제 발생.
          따라서, count 설정 및 reward 설정으로 한 번만 Reward 되도록 설정.
      */
      if (count === 0) {
        AdMobRewarded.addEventListener("rewardedVideoDidClose", () => {
          if (count === 0 && reward === true) {
            setCheckReward(true);

            setTimeout(getReward, 2500);

            count++;
          }
        });
      }
    });

    AdMobRewarded.addEventListener("rewardedVideoDidClose", () => null);
    AdMobRewarded.addEventListener("rewardedVideoDidLoad", () => null);
    AdMobRewarded.addEventListener("rewardedVideoDidFailToLoad", () => null);
    AdMobRewarded.addEventListener("rewardedVideoDidOpen", () => null);
    AdMobRewarded.addEventListener(
      "rewardedVideoWillLeaveApplication",
      () => null
    );

    return () => AdMobRewarded.removeAllListeners();
  }, []);

  return (
    <>
      <View style={styles.screen}>
        <View style={styles.heartContainer}>
          <Heart onPress={() => null} numOfHeart={numOfHeart} disabled={true} />
        </View>
        <View style={styles.contentContainer}>
          <Content onPress={getHeartFree} num={5} price={0} update={false} />
          <Content onPress={() => null} num={10} price={0.1} update={true} />
          <Content onPress={() => null} num={50} price={0.45} update={true} />
          <Content onPress={() => null} num={100} price={0.8} update={true} />
        </View>
        <View style={styles.footer}>
          <Button onPress={closeModal} disabled={checkClick} content={"home"} />
        </View>
      </View>
      {checkClick ? <Loader /> : null}
      {checkReward ? <GetHeart /> : null}
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primaryColor,
  },
  heartContainer: {
    width: "100%",
    height: vh(13),
    justifyContent: "center",
    alignItems: "flex-end",
    marginRight: vw(3),
    marginBottom: vh(2),
  },
  contentContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    height: vh(13),
    justifyContent: "flex-end",
    marginBottom: vh(2),
  },
  cardContainer: {
    width: "80%",
    marginBottom: vh(4),
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heartBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  priceBox: {},
  overlay: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    opacity: 0.8,
    padding: 20,
    borderRadius: 10,
    backgroundColor: colors.slateGrayColor,
    elevation: 6,
  },
  overlayTextContainer: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    elevation: 6,
  },
  overlayText: {
    fontSize: vw(8.5),
    fontWeight: "700",
    color: colors.whiteColor,
  },
  mulText: {
    fontSize: vw(5),
    fontWeight: "500",
    color: colors.blackColor,
  },
  numText: {
    fontSize: vw(7),
    fontWeight: "500",
    color: colors.blackColor,
  },
  price: {
    fontSize: vw(7),
    fontWeight: "700",
    color: colors.blackColor,
  },
});
