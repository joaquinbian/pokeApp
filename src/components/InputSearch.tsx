import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Input} from 'react-native-elements';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

const InputSearch = () => {
  //   return <TextInput />;
  return (
    <View
      style={{
        backgroundColor: 'red',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={styles.inputContainer}>
        <TextInput
          style={{color: 'black', width: '90%'}}
          placeholder="pokemon"
          placeholderTextColor="rgba(0,0,0,.3)"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Icon name="search-outline" size={20} />
      </View>
    </View>
  );
};

export default InputSearch;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,.2)',
    justifyContent: 'center',
  },
  inputContainer: {
    backgroundColor: 'white',
    width: '90%',
    height: '80%',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
