import React from 'react';
import {View, StyleSheet} from 'react-native';

interface Props {
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
export default Container;
