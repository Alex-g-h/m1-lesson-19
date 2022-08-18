/**
 * Generate random color component
 * @returns Random generated value from 0 up to 255
 */
function getRandomColorComponent() {
  return Math.floor(Math.random() * 256);
}

/**
 * Generate random color
 * @returns Random color in hex format '#AABBFF'
 */
export function getRandomColor() {
  const r = getRandomColorComponent();
  const g = getRandomColorComponent();
  const b = getRandomColorComponent();
  const color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
  return color;
}
