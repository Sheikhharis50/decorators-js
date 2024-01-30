export const split = (str) => {
  return str.split("");
};

export const reverse = (strArr) => {
  return strArr.reverse();
};

export const join = (strArr, seperator = "") => {
  return strArr.join(seperator);
};

const compose =
  (...methods) =>
  (value, seperator = "") => {
    return methods.reduceRight(
      (accValue, currMethod) =>
        currMethod === join
          ? currMethod(accValue, seperator)
          : currMethod(accValue),
      value
    );
  };

export const composedFunction = compose(join, reverse, split);
