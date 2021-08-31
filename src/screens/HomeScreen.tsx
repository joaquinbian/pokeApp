import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
// import {Na} from "@react-navigation/stack"
import {StackScreenProps} from '@react-navigation/stack';
interface Props extends StackScreenProps<any, any> {}
const HomeScreen = ({navigation}: Props) => {
  return (
    <View>
      <Text>homeScreen a</Text>
      <Button
        title="Go favs"
        buttonStyle={{backgroundColor: 'red', width: 150}}
        containerStyle={{
          // backgroundColor: 'blue',
          alignItems: 'center',
          marginTop: 20,
        }}
        onPress={() => navigation.navigate('FavPokemons')}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
