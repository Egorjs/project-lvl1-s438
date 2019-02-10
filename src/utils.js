const generateNumber = (minNum, maxNum) => {
  const result = Math.round(Math.random() * (maxNum - minNum) + minNum);
  return result;
};

export default generateNumber;
