import { hexToRgb } from 'utils/hexToRgb';

/* colors hex */
export const colors = {
  coral: '#FF6D70',
  bg: '#286470',
  blue: '#00A0C2',
  cardText: 'rgba(255, 255, 255, 0.9)',
  divider: 'rgba(0, 0, 0, 0.2)',
};

function createRbgaFunction(hex: string) {
  const rgb = hexToRgb(hex).join(',');

  return (a: number) => `rgba(${rgb}, ${a})`;
}

/* rgba colors */
export const colorsRgba = {
  bg: createRbgaFunction(colors.bg),
};

/* fonts */
export const fontPrimary = 'Montserrat, sans-serif';
export const fontNumber = 'Assistant, sans-serif';
export const fontSecondary = `Source Sans Pro , sans-serif`;
