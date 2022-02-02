export const subtract = (...a) => {
  let result = 0;
  const paramArr = [...a];
  for (let i = 0; i < paramArr.length; i++) {
    result = result ? result - paramArr[i] : result + paramArr[i];
  }
  return result;
};
