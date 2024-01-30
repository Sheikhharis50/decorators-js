export const split = (
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) => {
  const method = descriptor.value;
  descriptor.value = function (...args: string[]) {
    const [str] = args;
    const splitedArr = str.split("");
    method.apply(this, [splitedArr]);
  };
  return descriptor;
};

export const reverse = (
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) => {
  const method = descriptor.value;
  descriptor.value = function (...args: string[][]) {
    const [arr] = args;
    const reversedArr = arr.reverse();
    method.apply(this, [reversedArr]);
  };
  return descriptor;
};

export const join =
  (seperator = "") =>
  (target: any, propertyKey: any, descriptor: PropertyDescriptor) => {
    const method = descriptor.value;
    descriptor.value = (...args: string[][]) => {
      const [arr] = args;
      const joinedArr = arr.join(seperator);
      method.apply(this, [joinedArr]);
    };
  };
