import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageStyle,
  StyleProp,
  Animated,
} from 'react-native';
import useFadeIn from '../hooks/useFadeIn';

interface Props {
  uri: string;
  style: StyleProp<ImageStyle>;
}
const FadeImage = ({uri, style}: Props) => {
  const {fadeIn, opacity} = useFadeIn();
  const setImageLoaded = () => {
    fadeIn();
  };
  return (
    <View>
      <Animated.Image
        onLoadEnd={setImageLoaded}
        style={{...(style as any), opacity}}
        source={{uri}}
      />
    </View>
  );
};

export default FadeImage;

const styles = StyleSheet.create({});
