import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import InputSearch from '../components/InputSearch';

const SearchScreen = () => {
  const [text, setText] = useState('');
  const {top} = useSafeAreaInsets();
  return (
    <View style={{top, ...styles.container}}>
      <InputSearch />
      <View style={styles.listContainer}>
        <Text>pokelist</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    marginHorizontal: 10,
  },
});

export default SearchScreen;
