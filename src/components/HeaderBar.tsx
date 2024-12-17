import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import GradientBGIcon from './GradientBGIcon';
import ProfilePic from './ProfilePic';

interface HeaderBarPops {
  title?: string;
}
const HeaderBar: React.FC<HeaderBarPops> = ({title}) => {
  return (
    <View style={styles.container}>
      <GradientBGIcon
        name="menu"
        color={COLORS.primaryGreyHex}
        size={FONTSIZE.size_16}
      />
      <Text style={styles.HeaderTitle}>{title}</Text>
      <ProfilePic />
    </View>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({
  container: {
    padding: SPACING.space_24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  HeaderTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex,
  },
});
