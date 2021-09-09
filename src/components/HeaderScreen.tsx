import {useNavigation} from '@react-navigation/native';
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
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: color, ...styles.headerContainer}}>
      <TouchableOpacity
        activeOpacity={0.9}
        style={{paddingLeft: 5}}
        onPress={() => navigation.goBack()}>
        <Icon name="chevron-back-outline" color="#fff" size={35} />
      </TouchableOpacity>

      <Text style={styles.name}>{name}</Text>
      <Image
        source={{uri: image}}
        style={{width: 40, height: 40, marginRight: 5}}
      />
    </View>
  );
};

export default HeaderScreen;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
