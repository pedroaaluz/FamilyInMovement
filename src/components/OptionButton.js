import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default props => {
  return (
    <>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButtom}>{props.value}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  textButtom: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontFamily: 'PT Serif ',
  },

  button: {
    height: '20%',
    width: '100%',
    backgroundColor: '#FBAC91',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
});
