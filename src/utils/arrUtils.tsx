export const checkAvailability = (colors: AvailableColor[]) => {
  const sizes = colors.flatMap((color) => color.sizes);

  return sizes.every((size) => size.soldOut);
};
