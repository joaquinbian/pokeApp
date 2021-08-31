import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const PokeDetailScreen = () => {
  const {top} = useSafeAreaInsets();
  return (
    <View style={{marginTop: top + 10, marginHorizontal: 10}}>
      <Text>detail pokemon screen</Text>
    </View>
  );
};

export default PokeDetailScreen;

const styles = StyleSheet.create({});
