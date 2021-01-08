import React from "react";
import {
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
import { vw, vh, vmax } from "react-native-expo-viewport-units";

import FontAwesomeItem from "../components/FontAwesomeItem";
import colors from "../constants/colors";

const awardSize = vw(7);

/*
  Basics
*/

export const HOME = (
  <Entypo name={"home"} size={vw(6.5)} color={colors.whiteColor} />
);

export const TROPHY = (
  <Entypo name={"trophy"} size={vw(6.5)} color={colors.whiteColor} />
);

export const HEART = (
  <MaterialCommunityIcons
    name="cards-heart"
    size={vmax(7)}
    color={colors.redColor}
  />
);

export const ARROW_UP = (
  <Entypo name="arrow-up" size={vh(6)} color={colors.whiteColor} />
);

export const ARROW_RIGHT = (
  <Entypo name="arrow-right" size={vh(6)} color={colors.whiteColor} />
);

export const FLAG = (
  <FontAwesome5
    name="flag-checkered"
    size={vmax(6)}
    color={colors.primaryColor}
  />
);

export const STOP_WATCH = (
  <Entypo name="stopwatch" size={vh(3.5)} color={colors.accentColor} />
);

export const BAN = (
  <FontAwesome name="ban" size={vh(3.5)} color={colors.accentColor} />
);

export const EYE = (
  <MaterialCommunityIcons name="eye" size={vh(4)} color={colors.accentColor} />
);

/*
  Rank
*/

export const CROWN_1 = (
  <FontAwesome5 name={"crown"} size={awardSize} color={colors.goldColor} />
);

export const CROWN_2 = (
  <FontAwesome5 name={"crown"} size={awardSize} color={colors.silverColor} />
);

export const CROWN_3 = (
  <FontAwesome5 name={"crown"} size={awardSize} color={colors.brownColor} />
);

export const MEDAL_4 = (
  <FontAwesome5 name={"medal"} size={awardSize} color={colors.goldColor} />
);

export const MEDAL_5 = (
  <FontAwesome5 name={"medal"} size={awardSize} color={colors.silverColor} />
);

export const MEDAL_6 = (
  <FontAwesome5 name={"medal"} size={awardSize} color={colors.brownColor} />
);

export const AWARD_7 = (
  <FontAwesome5 name={"award"} size={awardSize} color={colors.goldColor} />
);

export const AWARD_8 = (
  <FontAwesome5 name={"award"} size={awardSize} color={colors.silverColor} />
);

export const AWARD_9 = (
  <FontAwesome5 name={"award"} size={awardSize} color={colors.brownColor} />
);

export const PRICE_RIBBON_10 = (
  <Entypo name={"price-ribbon"} size={awardSize} color={colors.goldColor} />
);

export const PRICE_RIBBON_11 = (
  <Entypo name={"price-ribbon"} size={awardSize} color={colors.silverColor} />
);

export const PRICE_RIBBON_12 = (
  <Entypo name={"price-ribbon"} size={awardSize} color={colors.brownColor} />
);

/*
  BOMB & SKULL
*/

export const BOMB_2X2 = (
  <MaterialCommunityIcons
    key={"bomb"}
    name="bomb"
    size={vw(20)}
    color={colors.redColor}
  />
);

export const BOMB_3X3 = (
  <MaterialCommunityIcons
    key={"bomb"}
    name="bomb"
    size={vw(18)}
    color={colors.redColor}
  />
);

export const BOMB_4X4 = (
  <MaterialCommunityIcons
    key={"bomb"}
    name="bomb"
    size={vw(12)}
    color={colors.redColor}
  />
);

export const BOMB_5X5 = (
  <MaterialCommunityIcons
    key={"bomb"}
    name="bomb"
    size={vw(10)}
    color={colors.redColor}
  />
);

export const BOMB_6X6 = (
  <MaterialCommunityIcons
    key={"bomb"}
    name="bomb"
    size={vw(8)}
    color={colors.redColor}
  />
);

export const SKULL_4X4 = (
  <MaterialCommunityIcons
    key={"skull"}
    name="skull-crossbones"
    size={vw(13)}
    color={colors.lightWhiteColor}
  />
);

export const SKULL_5X5 = (
  <MaterialCommunityIcons
    key={"skull"}
    name="skull-crossbones"
    size={vw(10)}
    color={colors.lightWhiteColor}
  />
);

export const SKULL_6X6 = (
  <MaterialCommunityIcons
    key={"skull"}
    name="skull-crossbones"
    size={vw(8)}
    color={colors.lightWhiteColor}
  />
);

export const RED_SKULL_4X4 = (
  <MaterialCommunityIcons
    key={"skull"}
    name="skull-crossbones"
    size={vw(13)}
    color={colors.redColor}
  />
);

export const RED_SKULL_5X5 = (
  <MaterialCommunityIcons
    key={"skull"}
    name="skull-crossbones"
    size={vw(10)}
    color={colors.redColor}
  />
);

export const RED_SKULL_6X6 = (
  <MaterialCommunityIcons
    key={"skull"}
    name="skull-crossbones"
    size={vw(8)}
    color={colors.redColor}
  />
);

/*
  STEP 1
*/

export const PLANE = (
  <FontAwesomeItem key={"plane"} name="plane" color={colors.deepSkyBlueColor} />
);

export const PLANE_DARK = (
  <FontAwesomeItem key={"plane-dark"} name="plane" color={colors.accentColor} />
);

export const PLANE_ARRIVAL = (
  <FontAwesomeItem
    key={"plane-arrival"}
    name="plane-arrival"
    color={colors.deepSkyBlueColor}
  />
);

export const PLANE_DEPARTURE = (
  <FontAwesomeItem
    key={"plane-departure"}
    name="plane-departure"
    color={colors.deepSkyBlueColor}
  />
);

export const BINOCULARS = (
  <FontAwesomeItem
    key={"binoculars"}
    name="binoculars"
    color={colors.accentColor}
  />
);

export const BINOCULARS_DEEP = (
  <FontAwesomeItem
    key={"binoculars-deep"}
    name="binoculars"
    color={colors.deepSkyBlueColor}
  />
);

export const CAMPGROUND = (
  <FontAwesomeItem
    key={"campground"}
    name="campground"
    color={colors.indigoColor}
  />
);

export const CAMPGROUND_DEEP = (
  <FontAwesomeItem
    key={"campground-deep"}
    name="campground"
    color={colors.deepSkyBlueColor}
  />
);

export const FIRST_AID = (
  <FontAwesomeItem
    key={"first-aid"}
    name="first-aid"
    color={colors.maroonColor}
  />
);

export const FIRST_AID_DEEP = (
  <FontAwesomeItem
    key={"first-aid-deep"}
    name="first-aid"
    color={colors.deepSkyBlueColor}
  />
);

export const TREE = (
  <FontAwesomeItem key={"tree"} name="tree" color={colors.forestGreenColor} />
);

export const TREE_DEEP = (
  <FontAwesomeItem
    key={"tree-deep"}
    name="tree"
    color={colors.deepSkyBlueColor}
  />
);

export const DOG = (
  <FontAwesomeItem key={"dog"} name="dog" color={colors.orangeColor} />
);

export const DOG_DEEP = (
  <FontAwesomeItem
    key={"dog-deep"}
    name="dog"
    color={colors.deepSkyBlueColor}
  />
);

export const DOVE = (
  <FontAwesomeItem key={"dove"} name="dove" color={colors.slateGrayColor} />
);

export const DOVE_DEEP = (
  <FontAwesomeItem
    key={"dove-deep"}
    name="dove"
    color={colors.deepSkyBlueColor}
  />
);

export const HORSE = (
  <FontAwesomeItem key={"horse"} name="horse" color={colors.brownColor} />
);

export const HORSE_DEEP = (
  <FontAwesomeItem
    key={"horse-deep"}
    name="horse"
    color={colors.deepSkyBlueColor}
  />
);

export const MOUNTAIN = (
  <FontAwesomeItem
    key={"mountain"}
    name="mountain"
    color={colors.indigoColor}
  />
);

export const MOUNTAIN_DEEP = (
  <FontAwesomeItem
    key={"mountain-deep"}
    name="mountain"
    color={colors.deepSkyBlueColor}
  />
);

export const CAT = (
  <FontAwesomeItem key={"cat"} name="cat" color={colors.orangeColor} />
);

export const CAT_DEEP = (
  <FontAwesomeItem
    key={"cat-deep"}
    name="cat"
    color={colors.deepSkyBlueColor}
  />
);

export const HIPPO = (
  <FontAwesomeItem key={"hippo"} name="hippo" color={colors.turquoiseColor} />
);

export const HIPPO_DEEP = (
  <FontAwesomeItem
    key={"hippo-deep"}
    name="hippo"
    color={colors.deepSkyBlueColor}
  />
);

export const ICE_CREAM = (
  <FontAwesomeItem
    key={"ice-cream"}
    name="ice-cream"
    color={colors.lightPinkColor}
  />
);

export const ICE_CREAM_DEEP = (
  <FontAwesomeItem
    key={"ice-cream-deep"}
    name="ice-cream"
    color={colors.deepSkyBlueColor}
  />
);

export const GIFT = (
  <FontAwesomeItem key={"gift"} name="gift" color={colors.darkSalmonColor} />
);

export const GIFT_DEEP = (
  <FontAwesomeItem
    key={"gift-deep"}
    name="gift"
    color={colors.deepSkyBlueColor}
  />
);

export const BICYCLE = (
  <FontAwesomeItem key={"bicycle"} name="bicycle" color={colors.brownColor} />
);

export const BICYCLE_DEEP = (
  <FontAwesomeItem
    key={"bicycle-deep"}
    name="bicycle"
    color={colors.deepSkyBlueColor}
  />
);

export const AMBULANCE = (
  <FontAwesomeItem
    key={"ambulance"}
    name="ambulance"
    color={colors.maroonColor}
  />
);

export const AMBULANCE_DEEP = (
  <FontAwesomeItem
    key={"ambulance-deep"}
    name="ambulance"
    color={colors.deepSkyBlueColor}
  />
);

export const DRAGON = (
  <FontAwesomeItem
    key={"dragon"}
    name="dragon"
    color={colors.forestGreenColor}
  />
);

export const DRAGON_DEEP = (
  <FontAwesomeItem
    key={"dragon-deep"}
    name="dragon"
    color={colors.deepSkyBlueColor}
  />
);

export const DRUM = (
  <FontAwesomeItem key={"drum"} name="drum" color={colors.indigoColor} />
);

export const DRUM_DEEP = (
  <FontAwesomeItem
    key={"drum-deep"}
    name="drum"
    color={colors.deepSkyBlueColor}
  />
);

export const FIGHTER_JET = (
  <FontAwesomeItem
    key={"fighter-jet"}
    name="fighter-jet"
    color={colors.slateGrayColor}
  />
);

export const FIGHTER_JET_DEEP = (
  <FontAwesomeItem
    key={"fighter-jet-deep"}
    name="fighter-jet"
    color={colors.deepSkyBlueColor}
  />
);

/*
  STEP 2
*/

export const SMILE = (
  <FontAwesomeItem key={"smile"} name="smile" color={colors.meduimBlueColor} />
);

export const SMILE_BEAM = (
  <FontAwesomeItem
    key={"smile-beam"}
    name="smile-beam"
    color={colors.goldColor}
  />
);

export const SMILE_WINK = (
  <FontAwesomeItem
    key={"smile-wink"}
    name="smile-wink"
    color={colors.maroonColor}
  />
);

export const SAD_CRY = (
  <FontAwesomeItem
    key={"sad-cry"}
    name="sad-cry"
    color={colors.deepSkyBlueColor}
  />
);

export const SAD_TEAR = (
  <FontAwesomeItem
    key={"sad-tear"}
    name="sad-tear"
    color={colors.turquoiseColor}
  />
);

export const ANGRY = (
  <FontAwesomeItem key={"angry"} name="angry" color={colors.accentColor} />
);

export const DIZZY = (
  <FontAwesomeItem key={"dizzy"} name="dizzy" color={colors.indigoColor} />
);

export const FROWN = (
  <FontAwesomeItem key={"frown"} name="frown" color={colors.darkSalmonColor} />
);

export const FROWN_OPEN = (
  <FontAwesomeItem
    key={"frown-open"}
    name="frown-open"
    color={colors.oliveColor}
  />
);

export const GRIMACE = (
  <FontAwesomeItem
    key={"grimace"}
    name="grimace"
    color={colors.darkNavyColor}
  />
);

export const GRIN = (
  <FontAwesomeItem key={"grin"} name="grin" color={colors.slateGrayColor} />
);

export const GRIN_BEAM = (
  <FontAwesomeItem
    key={"grin-beam"}
    name="grin-beam"
    color={colors.steelBlueColor}
  />
);

export const GRIN_BEAM_SWEAT = (
  <FontAwesomeItem
    key={"grin-beam-sweat"}
    name="grin-beam-sweat"
    color={colors.orangeColor}
  />
);

export const GRIN_HEARTS = (
  <FontAwesomeItem
    key={"grin-hearts"}
    name="grin-hearts"
    color={colors.hotPinkColor}
  />
);

export const GRIN_SQUINT = (
  <FontAwesomeItem
    key={"grin-squint"}
    name="grin-squint"
    color={colors.lightPinkColor}
  />
);

export const GRIN_STARS = (
  <FontAwesomeItem
    key={"grin-stars"}
    name="grin-stars"
    color={colors.slateBlueColor}
  />
);

export const GRIN_TONGUE = (
  <FontAwesomeItem
    key={"grin-tongue"}
    name="grin-tongue"
    color={colors.yellowGreenColor}
  />
);

export const GRIN_TONGUE_SQUINT = (
  <FontAwesomeItem
    key={"grin-tongue-squint"}
    name="grin-tongue-squint"
    color={colors.purpleColor}
  />
);

export const GRIN_TONGUE_WINK = (
  <FontAwesomeItem
    key={"grin-tongue-wink"}
    name="grin-tongue-wink"
    color={colors.orangeredColor}
  />
);

export const GRIN_WINK = (
  <FontAwesomeItem
    key={"grin-wink"}
    name="grin-wink"
    color={colors.lightPinkColor}
  />
);

export const KISS = (
  <FontAwesomeItem key={"kiss"} name="kiss" color={colors.maroonColor} />
);

export const KISS_WINK_HEART = (
  <FontAwesomeItem
    key={"kiss-wink-heart"}
    name="kiss-wink-heart"
    color={colors.hotPinkColor}
  />
);

export const SURPRISE = (
  <FontAwesomeItem
    key={"surprise"}
    name="surprise"
    color={colors.orangeColor}
  />
);

export const MEH_ROLLING_EYES = (
  <FontAwesomeItem
    key={"meh-rolling-eyes"}
    name="meh-rolling-eyes"
    color={colors.brownColor}
  />
);

/*
  STEP 3
*/

export const SMILE_DARK = (
  <FontAwesomeItem
    key={"smile-dark"}
    name="smile"
    color={colors.darkNavyColor}
  />
);

export const SMILE_BEAM_DARK = (
  <FontAwesomeItem
    key={"smile-beam-dark"}
    name="smile-beam"
    color={colors.darkNavyColor}
  />
);

export const SMILE_WINK_DARK = (
  <FontAwesomeItem
    key={"smile-wink-dark"}
    name="smile-wink"
    color={colors.darkNavyColor}
  />
);

export const SAD_CRY_DARK = (
  <FontAwesomeItem
    key={"sad-cry-dark"}
    name="sad-cry"
    color={colors.darkNavyColor}
  />
);

export const SAD_TEAR_DARK = (
  <FontAwesomeItem
    key={"sad-tear-dark"}
    name="sad-tear"
    color={colors.darkNavyColor}
  />
);

export const ANGRY_DARK = (
  <FontAwesomeItem
    key={"angry-dark"}
    name="angry"
    color={colors.darkNavyColor}
  />
);

export const DIZZY_DARK = (
  <FontAwesomeItem
    key={"dizzy-dark"}
    name="dizzy"
    color={colors.darkNavyColor}
  />
);

export const FROWN_DARK = (
  <FontAwesomeItem
    key={"frown-dark"}
    name="frown"
    color={colors.darkNavyColor}
  />
);

export const FROWN_OPEN_DARK = (
  <FontAwesomeItem
    key={"frown-open-dark"}
    name="frown-open"
    color={colors.darkNavyColor}
  />
);

export const GRIN_DARK = (
  <FontAwesomeItem key={"grin-dark"} name="grin" color={colors.darkNavyColor} />
);

export const GRIN_BEAM_DARK = (
  <FontAwesomeItem
    key={"grin-beam-dark"}
    name="grin-beam"
    color={colors.darkNavyColor}
  />
);

export const GRIN_BEAM_SWEAT_DARK = (
  <FontAwesomeItem
    key={"grin-beam-sweat-dark"}
    name="grin-beam-sweat"
    color={colors.darkNavyColor}
  />
);

export const GRIN_HEARTS_DARK = (
  <FontAwesomeItem
    key={"grin-hearts-dark"}
    name="grin-hearts"
    color={colors.darkNavyColor}
  />
);

export const GRIN_SQUINT_DARK = (
  <FontAwesomeItem
    key={"grin-squint-dark"}
    name="grin-squint"
    color={colors.darkNavyColor}
  />
);

export const GRIN_STARS_DARK = (
  <FontAwesomeItem
    key={"grin-stars-dark"}
    name="grin-stars"
    color={colors.darkNavyColor}
  />
);

export const GRIN_TONGUE_DARK = (
  <FontAwesomeItem
    key={"grin-tongue-dark"}
    name="grin-tongue"
    color={colors.darkNavyColor}
  />
);

export const GRIN_TONGUE_SQUINT_DARK = (
  <FontAwesomeItem
    key={"grin-tongue-squint-dark"}
    name="grin-tongue-squint"
    color={colors.darkNavyColor}
  />
);

export const GRIN_TONGUE_WINK_DARK = (
  <FontAwesomeItem
    key={"grin-tongue-wink-dark"}
    name="grin-tongue-wink"
    color={colors.darkNavyColor}
  />
);

export const GRIN_WINK_DARK = (
  <FontAwesomeItem
    key={"grin-wink-dark"}
    name="grin-wink"
    color={colors.darkNavyColor}
  />
);

export const KISS_DARK = (
  <FontAwesomeItem key={"kiss-dark"} name="kiss" color={colors.darkNavyColor} />
);

export const KISS_WINK_HEART_DARK = (
  <FontAwesomeItem
    key={"kiss-wink-heart-dark"}
    name="kiss-wink-heart"
    color={colors.darkNavyColor}
  />
);

export const SURPRISE_DARK = (
  <FontAwesomeItem
    key={"surprise-dark"}
    name="surprise"
    color={colors.darkNavyColor}
  />
);

export const MEH_ROLLING_EYES_DARK = (
  <FontAwesomeItem
    key={"meh-rolling-eyes-dark"}
    name="meh-rolling-eyes"
    color={colors.darkNavyColor}
  />
);

/*
  Func
*/

export const getSkullForHint = (horizontalNum) => {
  switch (true) {
    case horizontalNum === 4:
      return RED_SKULL_4X4;

    case horizontalNum === 5:
      return RED_SKULL_5X5;

    case horizontalNum === 6:
      return RED_SKULL_6X6;
  }
};
