import ImageColors from 'react-native-image-colors';

export const getColors = async (uri: string) => {
  let color;

  try {
    const colors = await ImageColors.getColors(uri, {});
    console.log(colors, 'soy los colores');

    if (colors.platform === 'android') {
      color = colors.dominant;
    } else if (colors.platform === 'ios') {
      color = colors.background;
    }
  } catch (err) {
    // console.log(err);
  }

  console.log(color, 'soy el color');

  return {color};
};
