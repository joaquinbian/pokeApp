import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageStyle,
  StyleProp,
  Animated,
  ActivityIndicator,
} from 'react-native';
import useFadeIn from '../hooks/useFadeIn';

interface Props {
  uri: string;
  style: StyleProp<ImageStyle>;
}
const FadeImage = ({uri, style = {}}: Props) => {
  const {fadeIn, opacity, position, startMoving} = useFadeIn();
  const [isLoading, setIsLoading] = useState(true);

  const setImageLoaded = () => {
    setIsLoading(false);
    fadeIn();
    startMoving(-50);
  };
  return (
    <Animated.View style={{top: position, ...(style as any)}}>
      {isLoading && <ActivityIndicator color="red" size={25} />}
      <Animated.Image
        onLoadEnd={setImageLoaded}
        style={{...(style as any), opacity}}
        source={{uri}}
      />
    </Animated.View>
  );
};

export default FadeImage;

const styles = StyleSheet.create({});
