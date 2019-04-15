import { clamp } from 'utils/clamp';

export const scaleLevels = [
  { label: 'Boa', color: '#00dc9a', size: 66 },
  { label: 'Moderada', color: '#ade783', size: 28 },
  { label: 'Ruim', color: '#ffee8f', size: 60 },
  { label: 'Muito Ruim', color: '#fa9c5a', size: 27 },
  { label: 'Péssima', color: '#de425b', size: 37 },
];

export function getQualityLevel(iqa: number) {
  return clamp(Math.round((1 - iqa / 200) * 4 + 1), 1, 5);
}
