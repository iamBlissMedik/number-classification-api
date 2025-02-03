export const isPrime = (num: number): boolean => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

export const isPerfect = (num: number): boolean => {
  let sum = 1;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      sum += i + (i !== num / i ? num / i : 0);
    }
  }
  return sum === num && num !== 1;
};

export const isArmstrong = (num: number): boolean => {
  const digits = num.toString().split("").map(Number);
  const power = digits.length;
  return digits.reduce((sum, digit) => sum + Math.pow(digit, power), 0) === num;
};

export const digitSum = (num: number): number => {
  const digits = Math.abs(num).toString().split("").map(Number);

  const sum = digits.reduce((acc, digit) => acc + digit, 0);

  return sum;
};
