const generateNumber = (minNum, maxNum) => {
  const result = Math.round(Math.random() * (maxNum - minNum) + minNum);
  return result;
};

const greatestDivisor = (num1, num2) => {
  let param1 = num1;
  let param2 = num2;
  while (param1 !== param2) {
    if (param1 > param2) {
      param1 -= param2;
    } else {
      param2 -= param1;
    }
  }
  return param1;
};

export {
  generateNumber, greatestDivisor,
};
