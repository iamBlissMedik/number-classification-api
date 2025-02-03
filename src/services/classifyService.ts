import { isPrime, isPerfect, isArmstrong, digitSum } from "../utils/mathUtils";

export const classify = (num: number) => {
  const properties = [];

  if (isArmstrong(num)) properties.push("armstrong");
  properties.push(num % 2 === 0 ? "even" : "odd");

  return {
    is_prime: isPrime(num),
    is_perfect: isPerfect(num),
    properties,
    digit_sum: digitSum(num),
  };
};
