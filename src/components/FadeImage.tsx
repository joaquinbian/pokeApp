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
  const {fadeIn, opacity, position: top, startMoving} = useFadeIn();
  const [isLoading, setIsLoading] = useState(true);

  const setImageLoaded = () => {
    setIsLoading(false);
    fadeIn();
    startMoving(-20);
  };

  const LoadImage = () => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="red" size={25} />
      </View>
    );
  };
  return (
    <Animated.View style={{top, ...(style as any)}}>
      {isLoading && <LoadImage />}
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
