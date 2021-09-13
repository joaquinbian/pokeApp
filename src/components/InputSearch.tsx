import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import usePokemonSearch from '../hooks/usePokemonSearch';

const InputSearch = () => {
  const [textInput, setTextInput] = useState('');
  console.log(textInput);
  //   usePokemonSearch();

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={{
            color: 'black',
            flex: 1,
          }}
          placeholder="pokemon"
          placeholderTextColor="rgba(0,0,0,.3)"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={text => setTextInput(text)}
        />
        <Icon name="search-outline" size={20} />
      </View>
    </View>
  );
};

export default InputSearch;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
  },
  inputContainer: {
    backgroundColor: 'white',
    width: '90%',
    marginVertical: 5,
    height: 40,
    paddingHorizontal: 5,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});
