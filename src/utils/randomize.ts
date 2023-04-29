export const randomizeDigits = (num: number) => {
    let digits = Array.from(num.toString()).map(Number);

    for (let i = digits.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [digits[i], digits[j]] = [digits[j], digits[i]];
    }

    return parseInt(digits.join(""));
  };