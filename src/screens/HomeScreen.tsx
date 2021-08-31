import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import {StackScreenProps} from '@react-navigation/stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Image} from 'react-native-elements/dist/image/Image';

interface Props extends StackScreenProps<any, any> {}

const HomeScreen = ({navigation}: Props) => {
  const {top} = useSafeAreaInsets();
  return (
    <View style={{marginTop: top + 10, flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.pokebolaImgContainer}>
        <Image
          source={require('../assets/pokebola.png')}
          style={styles.pokebolaImg}
        />
      </View>
      {/* <Text>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text> */}
      <View style={{marginTop: top + 10, marginHorizontal: 15}}>
        <Text>Pokedex</Text>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  pokebolaImgContainer: {
    position: 'absolute',
    top: -100,
    right: -100,
  },
  pokebolaImg: {
    height: 300,
    width: 300,
    opacity: 0.4,
  },
});
