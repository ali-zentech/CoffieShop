import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, SPACING} from '../theme/theme';
import CustomIcons from './customIcons';

interface GradientIconProps {
  name: string;
  color: string;
  size: number;
}
const GradientBGIcon: React.FC<GradientIconProps> = ({name, color, size}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.LinearGradientBG}
        colors={[COLORS.primaryLightGreyHex, COLORS.primaryGreyHex]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <CustomIcons name={name} color={color} size={size} />
      </LinearGradient>
    </View>
  );
};

export default GradientBGIcon;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: COLORS.primaryDarkGreyHex,
    borderRadius: SPACING.space_12,
    alignItems: 'center',
    backgroundColor: COLORS.primaryLightGreyHex,
    overflow: 'hidden',
  },
  LinearGradientBG: {
    height: SPACING.space_36,
    width: SPACING.space_36,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
