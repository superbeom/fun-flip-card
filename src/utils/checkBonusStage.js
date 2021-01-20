import {
  BOMB_3X3,
  BOMB_4X4,
  BOMB_5X5,
  BOMB_6X6,
  PLANE,
  PLANE_ARRIVAL,
  PLANE_DEPARTURE,
  BINOCULARS,
  CAMPGROUND,
  FIRST_AID,
  TREE,
  DOG,
  DOVE,
  HORSE,
  MOUNTAIN,
  CAT,
  HIPPO,
  ICE_CREAM,
  GIFT,
  BICYCLE,
  AMBULANCE,
  DRAGON,
  DRUM,
  FIGHTER_JET,
  SMILE,
  SMILE_BEAM,
  SMILE_WINK,
  SAD_CRY,
  SAD_TEAR,
  ANGRY,
  DIZZY,
  FROWN,
  FROWN_OPEN,
  GRIMACE,
  GRIN,
  GRIN_BEAM,
  GRIN_BEAM_SWEAT,
  GRIN_HEARTS,
  GRIN_SQUINT,
  GRIN_STARS,
  GRIN_TONGUE,
  GRIN_TONGUE_SQUINT,
  GRIN_TONGUE_WINK,
  GRIN_WINK,
  KISS,
  KISS_WINK_HEART,
  SURPRISE,
  MEH_ROLLING_EYES,
} from "./FontAwesomeSource";

const sourceArray = [
  PLANE,
  PLANE_DARK,
  PLANE_ARRIVAL,
  PLANE_DEPARTURE,
  BINOCULARS,
  BINOCULARS_DEEP,
  CAMPGROUND,
  CAMPGROUND_DEEP,
  FIRST_AID,
  FIRST_AID_DEEP,
  TREE,
  TREE_DEEP,
  DOG,
  DOG_DEEP,
  DOVE,
  DOVE_DEEP,
  HORSE,
  HORSE_DEEP,
  MOUNTAIN,
  MOUNTAIN_DEEP,
  CAT,
  CAT_DEEP,
  HIPPO,
  HIPPO_DEEP,
  ICE_CREAM,
  ICE_CREAM_DEEP,
  GIFT,
  GIFT_DEEP,
  BICYCLE,
  BICYCLE_DEEP,
  AMBULANCE,
  AMBULANCE_DEEP,
  DRAGON,
  DRAGON_DEEP,
  DRUM,
  DRUM_DEEP,
  FIGHTER_JET,
  FIGHTER_JET_DEEP,
  SMILE,
  SMILE_DARK,
  SMILE_BEAM,
  SMILE_BEAM_DARK,
  SMILE_WINK,
  SMILE_WINK_DARK,
  SAD_CRY,
  SAD_CRY_DARK,
  SAD_TEAR,
  SAD_TEAR_DARK,
  ANGRY,
  ANGRY_DARK,
  DIZZY,
  DIZZY_DARK,
  FROWN,
  FROWN_DARK,
  FROWN_OPEN,
  FROWN_OPEN_DARK,
  GRIMACE,
  GRIN,
  GRIN_DARK,
  GRIN_BEAM,
  GRIN_BEAM_DARK,
  GRIN_BEAM_SWEAT,
  GRIN_BEAM_SWEAT_DARK,
  GRIN_HEARTS,
  GRIN_HEARTS_DARK,
  GRIN_SQUINT,
  GRIN_SQUINT_DARK,
  GRIN_STARS,
  GRIN_STARS_DARK,
  GRIN_TONGUE,
  GRIN_TONGUE_DARK,
  GRIN_TONGUE_SQUINT,
  GRIN_TONGUE_SQUINT_DARK,
  GRIN_TONGUE_WINK,
  GRIN_TONGUE_WINK_DARK,
  GRIN_WINK,
  GRIN_WINK_DARK,
  KISS,
  KISS_DARK,
  KISS_WINK_HEART,
  KISS_WINK_HEART_DARK,
  SURPRISE,
  SURPRISE_DARK,
  MEH_ROLLING_EYES,
  MEH_ROLLING_EYES_DARK,
];

const getMax = (horizontalNum) => {
  switch (true) {
    case horizontalNum === 3:
      return 4;

    case horizontalNum === 4:
      return 8;

    case horizontalNum === 5:
      return 12;

    case horizontalNum === 6:
      return 18;
  }
};

const getBomb = (horizontalNum) => {
  switch (true) {
    case horizontalNum === 3:
      return BOMB_3X3;

    case horizontalNum === 4:
      return BOMB_4X4;

    case horizontalNum === 5:
      return BOMB_5X5;

    case horizontalNum === 6:
      return BOMB_6X6;
  }
};

const randomAnswerNum = (horizontalNum) => {
  const numOfAnswer = Math.floor(Math.random() * getMax(horizontalNum)) + 1;
  let bomb;

  if (horizontalNum === 3) {
    switch (true) {
      case numOfAnswer === 1:
        bomb = 7;
        break;

      case numOfAnswer === 2:
        bomb = 5;
        break;

      case numOfAnswer === 3:
        bomb = 3;
        break;

      case numOfAnswer === 4:
        bomb = 1;
        break;
    }
  } else if (horizontalNum === 4) {
    switch (true) {
      case numOfAnswer === 1:
        bomb = 14;
        break;

      case numOfAnswer === 2:
        bomb = 12;
        break;

      case numOfAnswer === 3:
        bomb = 10;
        break;

      case numOfAnswer === 4:
        bomb = 8;
        break;

      case numOfAnswer === 5:
        bomb = 6;
        break;

      case numOfAnswer === 6:
        bomb = 4;
        break;

      case numOfAnswer === 7:
        bomb = 2;
        break;

      case numOfAnswer === 8:
        bomb = 0;
        break;
    }
  } else if (horizontalNum === 5) {
    switch (true) {
      case numOfAnswer === 1:
        bomb = 23;
        break;

      case numOfAnswer === 2:
        bomb = 21;
        break;

      case numOfAnswer === 3:
        bomb = 19;
        break;

      case numOfAnswer === 4:
        bomb = 17;
        break;

      case numOfAnswer === 5:
        bomb = 15;
        break;

      case numOfAnswer === 6:
        bomb = 13;
        break;

      case numOfAnswer === 7:
        bomb = 11;
        break;

      case numOfAnswer === 8:
        bomb = 9;
        break;

      case numOfAnswer === 9:
        bomb = 7;
        break;

      case numOfAnswer === 10:
        bomb = 5;
        break;

      case numOfAnswer === 11:
        bomb = 3;
        break;

      case numOfAnswer === 12:
        bomb = 1;
        break;
    }
  } else if (horizontalNum === 6) {
    switch (true) {
      case numOfAnswer === 1:
        bomb = 34;
        break;

      case numOfAnswer === 2:
        bomb = 32;
        break;

      case numOfAnswer === 3:
        bomb = 30;
        break;

      case numOfAnswer === 4:
        bomb = 28;
        break;

      case numOfAnswer === 5:
        bomb = 26;
        break;

      case numOfAnswer === 6:
        bomb = 24;
        break;

      case numOfAnswer === 7:
        bomb = 22;
        break;

      case numOfAnswer === 8:
        bomb = 20;
        break;

      case numOfAnswer === 9:
        bomb = 18;
        break;

      case numOfAnswer === 10:
        bomb = 16;
        break;

      case numOfAnswer === 11:
        bomb = 14;
        break;

      case numOfAnswer === 12:
        bomb = 12;
        break;

      case numOfAnswer === 13:
        bomb = 10;
        break;

      case numOfAnswer === 14:
        bomb = 8;
        break;

      case numOfAnswer === 15:
        bomb = 6;
        break;

      case numOfAnswer === 16:
        bomb = 4;
        break;

      case numOfAnswer === 17:
        bomb = 2;
        break;

      case numOfAnswer === 18:
        bomb = 0;
        break;
    }
  }

  return { answer: numOfAnswer, bomb };
};

export default ({ horizontalNum }) => {
  const { answer, bomb } = randomAnswerNum(horizontalNum);
  const stageArray = [];
  const whichBomb = getBomb(horizontalNum);

  while (stageArray.length < answer * 2) {
    const randomIndex = Math.floor(Math.random() * sourceArray.length);
    const stageContent = sourceArray[randomIndex];
    if (!stageArray.includes(stageContent)) {
      stageArray.push(stageContent, stageContent);
    }
  }

  for (let i = 0; i < bomb; i++) {
    stageArray.push(whichBomb);
  }
};
