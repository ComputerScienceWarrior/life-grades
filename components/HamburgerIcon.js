import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

const HamburgerIcon = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={require('../images/hamburger-icon.png')}
        style={styles.icon}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10, 
  },
  icon: {
    width: 24, 
    height: 24,
    tintColor: '#000',
  },
});

export default HamburgerIcon;
