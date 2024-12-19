import {Image, ImageProps, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import LinearGradient from 'react-native-linear-gradient';
import CustomIcons from './CustomIcons';

interface DisplayCardProps {
  paymentMode: string;
  icon: any;
  name: string;
  isIcon: Boolean;
}
const DisplayCard: React.FC<DisplayCardProps> = ({
  paymentMode,
  name,
  icon,
  isIcon,
}) => {
  return (
    <View
      style={[
        styles.CreditCardContainer,
        {
          borderColor:
            paymentMode == name
              ? COLORS.primaryOrangeHex
              : COLORS.primaryGreyHex,
        },
      ]}>
      <Text style={styles.CreditCardTitle}>{name}</Text>
      <View style={styles.CreditCardBG}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.LinearGradientStyle}
          colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
          <View style={styles.CreditCardRow}>
            <CustomIcons
              name="chip"
              size={FONTSIZE.size_20 * 2}
              color={COLORS.primaryOrangeHex}
            />
            {isIcon ? (
              <CustomIcons
                name={icon}
                size={FONTSIZE.size_20 * 2}
                color={COLORS.primaryOrangeHex}
              />
            ) : (
              <Image source={icon} style={styles.PaymentImage} />
            )}
          </View>
          <View style={styles.CreditCardNumberContainer}>
            <Text style={styles.CreditCardNumber}>3879</Text>
            <Text style={styles.CreditCardNumber}>8923</Text>
            <Text style={styles.CreditCardNumber}>6745</Text>
            <Text style={styles.CreditCardNumber}>4638</Text>
          </View>
          <View style={styles.CreditCardRow}>
            <View style={styles.CreditCardNameContainer}>
              <Text style={styles.CreditCardNameSubitle}>Card Holder Name</Text>
              <Text style={styles.CreditCardNameTitle}>Robert Evans</Text>
            </View>
            <View style={styles.CreditCardDateContainer}>
              <Text style={styles.CreditCardNameSubitle}>Expiry Date</Text>
              <Text style={styles.CreditCardNameTitle}>02/30</Text>
            </View>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

export default DisplayCard;

const styles = StyleSheet.create({
  CreditCardContainer: {
    padding: SPACING.space_10,
    gap: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_15 * 2,
    borderWidth: 3,
  },
  CreditCardTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
    marginLeft: SPACING.space_10,
  },
  CreditCardBG: {
    backgroundColor: COLORS.primaryGreyHex,
    borderRadius: BORDERRADIUS.radius_25,
  },
  LinearGradientStyle: {
    borderRadius: BORDERRADIUS.radius_25,
    gap: SPACING.space_36,
    paddingHorizontal: SPACING.space_15,
    paddingVertical: SPACING.space_10,
  },
  CreditCardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  CreditCardNumberContainer: {
    flexDirection: 'row',
    gap: SPACING.space_10,
    alignItems: 'center',
  },
  CreditCardNumber: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryWhiteHex,
    letterSpacing: SPACING.space_4 + SPACING.space_2,
  },
  CreditCardNameSubitle: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_12,
    color: COLORS.secondaryLightGreyHex,
  },
  CreditCardNameTitle: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryWhiteHex,
  },
  CreditCardNameContainer: {
    alignItems: 'flex-start',
  },
  CreditCardDateContainer: {
    alignItems: 'flex-end',
  },
  PaymentImage: {
    height: SPACING.space_30,
    width: SPACING.space_30,
  },
});
