import React, {useRef, useState} from 'react';
import {Animated} from 'react-native';

const useFadeIn = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const position = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  };
  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const startMoving = (initialPosition: number, duration: number = 500) => {
    position.setValue(initialPosition);
    Animated.timing(position, {
      toValue: 0,
      duration,
      useNativeDriver: false,
    }).start();
  };
  return {
    fadeIn,
    fadeOut,
    opacity,
    position,
    startMoving,
  };
};
export default useFadeIn;
