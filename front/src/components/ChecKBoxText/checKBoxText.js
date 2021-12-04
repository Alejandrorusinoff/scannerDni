import React from 'react';
import { View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';


import styles from './styles';

function ChecKBoxText({ text, isChecked, onPress }) {
  
  return (
    <View style={styles.optionContainer}>
      <BouncyCheckbox
        size={25}
        text={text}
        fillColor="black"
        unfillColor="#FFFFFF"
        textContainerStyle={{
          ...styles.option,
        }}
        textStyle={{ fontFamily: "JosefinSans-Regular" }}
        disableBuiltInState
        isChecked={isChecked}
        onPress={onPress}
      />
    </View>
  );
}

export default ChecKBoxText;
