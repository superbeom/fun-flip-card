/* stage에 따른, 정답 갯수 */
export const checkAnswer = (stage) => {
  if (
    stage === 1 ||
    stage === 6 ||
    stage === 37 ||
    stage === 158 ||
    stage === 335
  ) {
    return 1;
  } else if (
    (stage > 1 && stage <= 5) ||
    (stage > 6 && stage <= 9) ||
    (stage > 22 && stage <= 26) ||
    (stage > 37 && stage <= 39) ||
    stage === 159 ||
    (stage > 335 && stage <= 340)
  ) {
    return 2;
  } else if (
    (stage > 9 && stage <= 14) ||
    (stage > 26 && stage <= 30) ||
    (stage > 39 && stage <= 43) ||
    (stage > 159 && stage <= 163) ||
    (stage > 340 && stage <= 350)
  ) {
    return 3;
  } else if (
    (stage > 14 && stage <= 22) ||
    (stage > 30 && stage <= 36) ||
    (stage > 43 && stage <= 60) ||
    (stage > 163 && stage <= 167) ||
    (stage > 350 && stage <= 366)
  ) {
    return 4;
  } else if (
    (stage > 60 && stage <= 81) ||
    (stage > 167 && stage <= 172) ||
    (stage > 366 && stage <= 386)
  ) {
    return 5;
  } else if (
    (stage > 81 && stage <= 99) ||
    (stage > 172 && stage <= 186) ||
    (stage > 386 && stage <= 411)
  ) {
    return 6;
  } else if (
    (stage > 99 && stage <= 118) ||
    (stage > 186 && stage <= 210) ||
    (stage > 411 && stage <= 443)
  ) {
    return 7;
  } else if (
    (stage > 118 && stage <= 157) ||
    (stage > 210 && stage <= 238) ||
    (stage > 443 && stage <= 473)
  ) {
    return 8;
  } else if ((stage > 238 && stage <= 263) || (stage > 473 && stage <= 507)) {
    return 9;
  } else if ((stage > 263 && stage <= 290) || (stage > 507 && stage <= 535)) {
    return 10;
  } else if ((stage > 290 && stage <= 311) || (stage > 535 && stage <= 566)) {
    return 11;
  } else if ((stage > 311 && stage <= 334) || (stage > 566 && stage <= 600)) {
    return 12;
  } else if (stage > 600 && stage <= 637) {
    return 13;
  } else if (stage > 637 && stage <= 677) {
    return 14;
  } else if (stage > 677 && stage <= 720) {
    return 15;
  } else if (stage > 720 && stage <= 766) {
    return 16;
  } else if (stage > 766 && stage <= 815) {
    return 17;
  } else if (stage > 815 && stage <= 885) {
    return 18;
  }
};

/* stage에 따른, 처음에 정답 보여 주는 시간 */
export const checkTime = (stage) => {
  if (stage === 1) return 2000;
  else if (
    (stage > 1 && stage <= 14) ||
    (stage > 22 && stage <= 27) ||
    (stage > 36 && stage <= 39)
  )
    return 1500;
  else if (
    (stage > 14 && stage <= 22) ||
    (stage > 27 && stage <= 29) ||
    (stage > 39 && stage <= 43) ||
    (stage > 157 && stage <= 159)
  )
    return 2000;
  else if (
    (stage > 29 && stage <= 36) ||
    (stage > 159 && stage <= 163) ||
    (stage > 334 && stage <= 340)
  )
    return 2500;
  else if (stage > 43 && stage <= 60) return 3000;
  else if (
    (stage > 60 && stage <= 81) ||
    (stage > 163 && stage <= 167) ||
    (stage > 340 && stage <= 366)
  )
    return 4000;
  else if ((stage > 81 && stage <= 87) || (stage > 167 && stage <= 172))
    return 4500;
  else if ((stage > 87 && stage <= 111) || (stage > 366 && stage <= 386))
    return 5000;
  else if (stage > 111 && stage <= 141) return 5300;
  else if ((stage > 141 && stage <= 157) || (stage > 386 && stage <= 411))
    return 5500;
  else if (stage > 172 && stage <= 263) return 6000;
  else if ((stage > 263 && stage <= 290) || (stage > 411 && stage <= 443))
    return 6500;
  else if ((stage > 290 && stage <= 311) || (stage > 443 && stage <= 498))
    return 6700;
  else if ((stage > 311 && stage <= 334) || (stage > 498 && stage <= 525))
    return 7000;
  else if (stage > 525 && stage <= 555) return 7300;
  else if (stage > 555 && stage <= 588) return 7500;
  else if (stage > 588 && stage <= 600) return 7700;
  else if (stage > 600 && stage <= 663) return 8000;
  else if (stage > 663 && stage <= 705) return 8300;
  else if (stage > 705 && stage <= 750) return 8500;
  else if (stage > 750 && stage <= 798) return 8700;
  else if (stage > 798 && stage <= 885) return 9000;
};

/* stage에 따른, 제한 시간 */
export const checkLimitTime = (stage) => {
  if (
    stage <= 14 ||
    (stage > 36 && stage <= 43) ||
    (stage > 157 && stage <= 159) ||
    (stage > 159 && stage <= 163)
  )
    return 10;
  else if (
    (stage > 14 && stage <= 36) ||
    (stage > 43 && stage <= 111) ||
    (stage > 118 && stage <= 141) ||
    (stage > 163 && stage <= 172) ||
    (stage > 334 && stage <= 350)
  )
    return 15;
  else if (
    (stage > 111 && stage <= 118) ||
    (stage > 141 && stage <= 157) ||
    (stage > 172 && stage <= 210) ||
    (stage > 350 && stage <= 411)
  )
    return 20;
  else if (stage > 210 && stage <= 254) return 25;
  else if ((stage > 254 && stage <= 290) || (stage > 411 && stage <= 443))
    return 30;
  else if ((stage > 290 && stage <= 323) || (stage > 443 && stage <= 498))
    return 35;
  else if ((stage > 323 && stage <= 334) || (stage > 498 && stage <= 525))
    return 40;
  else if (stage > 525 && stage <= 555) return 50;
  else if (stage > 555 && stage <= 588) return 55;
  else if (stage > 588 && stage <= 600) return 60;
  else if (stage > 600 && stage <= 663) return 65;
  else if (stage > 663 && stage <= 705) return 70;
  else if (stage > 705 && stage <= 885) return 75;
};

/* 보상 stage */
export const stageForReward = [
  5,
  36,
  71,
  157,
  186,
  210,
  238,
  263,
  290,
  311,
  334,
  366,
  386,
  411,
  429,
  443,
  459,
  473,
  491,
  507,
  525,
  535,
  555,
  566,
  588,
  600,
  613,
  624,
  637,
  651,
  663,
  677,
  692,
  705,
  720,
  736,
  750,
  766,
  783,
  798,
  815,
  833,
  850,
];
