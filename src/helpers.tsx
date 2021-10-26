export const getRowLength = (dataNum: number, idx: number) => {
  if (dataNum <= 3) return dataNum;
  else if (dataNum > 3 && dataNum < 6) {
    return idx < 3 ? 3 : dataNum - 3;
  } else if (dataNum === 6) return dataNum / 2;
  else return 0;
};
