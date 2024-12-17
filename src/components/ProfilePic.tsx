import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, SPACING} from '../theme/theme';
import {assets} from '../../react-native.config';

const ProfilePic = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.Image}
        source={require('../assets/app_images/avatar.png')}></Image>
    </View>
  );
};

export default ProfilePic;

const styles = StyleSheet.create({
  container: {
    height: SPACING.space_36,
    width: SPACING.space_36,
    borderRadius: SPACING.space_12,
    borderWidth: 2,
    borderColor: COLORS.primaryGreyHex,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  Image: {
    height: SPACING.space_36,
    width: SPACING.space_36,
  },
});
