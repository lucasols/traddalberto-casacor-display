export const scaleLevels = [
  { label: 'Boa', color: '#00dc9a', size: 56, iqa: 40 },
  { label: 'Moderada', color: '#ade783', size: 26, iqa: 80 },
  { label: 'Ruim', color: '#ffee8f', size: 48, iqa: 120 },
  { label: 'Muito Ruim', color: '#fa9c5a', size: 24, iqa: 200 },
  { label: 'Péssima', color: '#de425b', size: 37, iqa: 99999 },
];

export function getQualityLevel(iqa: number) {
  for (let i = 0; i < scaleLevels.length; i++) {
    if (iqa < scaleLevels[i].iqa) return i + 1;
  }

  return 4;
}
