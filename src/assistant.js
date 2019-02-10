const generateNumber = () => {
  const result = Math.round(Math.random() * (100 - 1 + 1) + 1);
  return result;
};

const generateOperation = (num1, num2) => {
  let result = '';
  const random = generateNumber();
  if (random < 33) {
    result = `${num1} + ${num2}`;
  } else if (random > 33 && random < 66) {
    result = `${num1} - ${num2}`;
  } else {
    result = `${num1} * ${num2}`;
  }
  return result;
};

const getOperation = (str, num1, num2) => {
  let result = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === '+') {
      result = num1 + num2;
    } if (str[i] === '-') {
      result = num1 - num2;
    } if (str[i] === '*') {
      result = num1 * num2;
    }
  }
  return result;
};

export { generateNumber, generateOperation, getOperation };
