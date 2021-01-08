export const shuffle = (item) => {
  let j, x, i;
  let shuffleItem = [];
  for (i = item.length; i; i -= 1) {
    j = Math.floor(Math.random() * i);
    x = item[i - 1];
    shuffleItem[i - 1] = item[j];
    item[i - 1] = item[j];
    item[j] = x;
    shuffleItem[j] = x;
  }
  return shuffleItem;
};
