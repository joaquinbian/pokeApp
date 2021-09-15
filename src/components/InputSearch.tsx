import React, {useEffect, useState} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import usePokemonSearch from '../hooks/usePokemonSearch';
import {useDebounced} from '../hooks/useDebounced';

interface Props {
  onDebounce: (value: any) => void;
  style?: StyleProp<ViewStyle> | StyleProp<TextStyle>;
}

const InputSearch = ({style, onDebounce}: Props) => {
  const [textInput, setTextInput] = useState('');

  const debouncedValue = useDebounced(textInput);

  useEffect(() => {
    onDebounce(debouncedValue);
  }, [debouncedValue]);

  return (
    <View
      style={{
        ...styles.container,
        ...(style as any), //eso puede venir nulo, entonces, lo que hacemos es ponerle el as any
        //como diciendo, confia
      }}>
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
    // marginVertical: 5,
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
