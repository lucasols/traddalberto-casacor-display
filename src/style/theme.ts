import { hexToRgb } from 'utils/hexToRgb';

/* colors hex */
export const colors = {
  coral: '#FF6D70',
  bg: '#286470',
  blue: '#00A0C2',
  blueAccent: '#00D2FF',
  cardText: 'rgba(255, 255, 255, 0.9)',
  cardNumber: '#fff',
  divider: 'rgba(0, 0, 0, 0.07)',
  red: '#DE425B',
  green: '#00DC9A',
};

function createRbgaFunction(hex: string) {
  const rgb = hexToRgb(hex).join(',');

  return (a: number) => `rgba(${rgb}, ${a})`;
}

/* rgba colors */
export const colorsRgba = {
  bg: createRbgaFunction(colors.bg),
  red: createRbgaFunction(colors.red),
  green: createRbgaFunction(colors.green),
  blue: createRbgaFunction(colors.blue),
  blueAccent: createRbgaFunction(colors.blueAccent),
};

/* fonts */
export const fontPrimary = 'Montserrat, sans-serif';
export const fontNumber = 'Assistant, sans-serif';
export const fontSecondary = `Source Sans Pro , sans-serif`;

export const easeInOut = 'cubic-bezier(0.4, 0, 0.2, 1)';
export const easeOut = 'cubic-bezier(0, 0, 0.2, 1)';
