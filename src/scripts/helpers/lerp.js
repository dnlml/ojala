/**
 * Linear interpolation:
 * Interpolates from a to b using the given alpha.
 *
 * @param {Number} a - Starting Value
 * @param {Number} b - Ending Value
 * @param {Number} n - Weight (between 0 and 1 return a value betwen the 2 points)
 */

const lerp = (a, b, n) => ((1 - n) * a) + (n * b);
export default lerp;
