import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  color: string;
  image: string;
  name: string;
}
const HeaderScreen = ({color, image, name}: Props) => {
  return (
    <View style={{backgroundColor: color, ...styles.headerContainer}}>
      <View style={{backgroundColor: 'red'}}>
        <TouchableOpacity activeOpacity={0.9}>
          <Icon name="chevron-back-outline" color="#fff" size={35} />
        </TouchableOpacity>
      </View>

      <Text style={styles.name}>{name}</Text>
      <Image source={{uri: image}} style={{width: 40, height: 40}} />
    </View>
  );
};

export default HeaderScreen;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
  },
  name: {
    color: '#fff',
    fontSize: 20,
  },
});
