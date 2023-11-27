/** Get Random integer: [1..6] */
export const d6 = () => Math.floor(Math.random() * 6) + 1

/** Get n roll => [num, ...] */
export const getRolls = (n) => Array.from({ length: n }, () => d6())

/** Get sum of nums */
export const sum = (nums) => nums.reduce((prev, curr) => prev + curr, 0)
