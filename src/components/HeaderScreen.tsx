import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  color: string;
  image: string;
  name: string;
}
const HeaderScreen = ({color}: Props) => {
  return (
    <View style={{backgroundColor: color}}>
      <Text>Soy el header broooo</Text>
    </View>
  );
};

export default HeaderScreen;

const styles = StyleSheet.create({});
