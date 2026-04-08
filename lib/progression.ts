export const getPhase = (day: number) => {
  if (day <= 30) return "foundation";
  if (day <= 60) return "strength";
  return "explosive";
};

export const scale = (base: number, day: number) => {
  return Math.floor(base + day * 0.4);
};
