import ImageColors from 'react-native-image-colors';

export const getColors = async (uri: string) => {
  let colorPrimary;
  let colorSecondary;

  try {
    const colors = await ImageColors.getColors(uri, {});
    console.log(colors, 'soy los colores');

    if (colors.platform === 'android') {
      colorPrimary = colors.dominant;
      colorSecondary = colors.average;
    } else if (colors.platform === 'ios') {
      colorPrimary = colors.background;
      colorSecondary = colors.primary;
    }
  } catch (err) {
    // console.log(err);
  }

  console.log(colorPrimary, 'soy el color');

  return {colorPrimary, colorSecondary};
};
