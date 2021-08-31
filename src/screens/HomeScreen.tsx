import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import {StackScreenProps} from '@react-navigation/stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props extends StackScreenProps<any, any> {}

const HomeScreen = ({navigation}: Props) => {
  const {top} = useSafeAreaInsets();
  return (
    <View style={{marginTop: top + 10, marginHorizontal: 10}}>
      <Text>homeScreen a</Text>
      <Button
        title="Go favs"
        titleStyle={{color: 'black'}}
        buttonStyle={{backgroundColor: 'white', width: 150}}
        containerStyle={{
          // backgroundColor: 'blue',
          alignItems: 'center',
          marginTop: 20,
        }}
        icon={<Icon name="heart-outline" size={19} style={{marginLeft: 10}} />}
        iconRight
        onPress={() => navigation.navigate('FavPokemons')}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
