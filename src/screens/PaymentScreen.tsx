import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import GradientBGIcon from '../components/GradientBGIcon';
import PaymentFooter from '../components/PaymentFooter';
import LinearGradient from 'react-native-linear-gradient';
import CustomIcon from '../components/CustomIcons';
import PaymentMethod from '../components/PaymentMethod';
import DisplayCard from '../components/DisplayCard';
import PopUpAnimation from '../components/PopUpAnimation';
import {useStore} from '../stores/store';

const PaymentList = [
  {
    name: 'Wallet',
    icon: 'wallet',
    isIcon: true,
  },
  {
    name: 'Credit card',
    icon: 'visa',
    isIcon: true,
  },
  {
    name: 'Google Pay',
    icon: require('../assets/app_images/gpay.png'),
    isIcon: false,
  },
  {
    name: 'Apple Pay',
    icon: require('../assets/app_images/applepay.png'),
    isIcon: false,
  },
  {
    name: 'Amazon Pay',
    icon: require('../assets/app_images/amazonpay.png'),
    isIcon: false,
  },
];

const PaymentScreen = ({navigation, route}: any) => {
  const [paymentMode, setpaymentMode] = useState('Credit Card');
  const [showAnimation, setShowAnimation] = useState(false);
  const addToOrderHistoryListFromCart = useStore(
    (state: any) => state.addToOrderHistoryListFromCart,
  );
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);
  const ButtonPressHandler = () => {
    setShowAnimation(true);
    addToOrderHistoryListFromCart();
    calculateCartPrice();
    setTimeout(() => {
      setShowAnimation(false);
      navigation.navigate('Tab', {screen: 'Order'});
    }, 2000);
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      {showAnimation ? (
        <PopUpAnimation
          style={styles.LottieAnimation}
          source={require('../lottie/successful.json')}
        />
      ) : (
        <></>
      )}
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.ScrollView}>
        <View style={styles.HeaderContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.pop();
            }}>
            <GradientBGIcon
              name="left"
              color={COLORS.primaryLightGreyHex}
              size={FONTSIZE.size_16}
            />
          </TouchableOpacity>
          <Text style={styles.HeaderText}> Payment</Text>
          <View style={styles.EmptyView} />
        </View>
        <View style={styles.PaymentOptionContainer}>
          {PaymentList.map((data: any, index: number) => {
            return (
              <TouchableOpacity
                key={data.name + index}
                onPress={() => setpaymentMode(data.name)}>
                {data.name != 'Wallet' ? (
                  <View>
                    {data.name == paymentMode ? (
                      <DisplayCard
                        paymentMode={paymentMode}
                        icon={data.icon}
                        name={data.name}
                        isIcon={data.isIcon}
                      />
                    ) : (
                      <PaymentMethod
                        paymentMode={paymentMode}
                        icon={data.icon}
                        name={data.name}
                        isIcon={data.isIcon}
                      />
                    )}
                  </View>
                ) : (
                  <PaymentMethod
                    paymentMode={paymentMode}
                    icon={data.icon}
                    name={data.name}
                    isIcon={data.isIcon}
                  />
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
      <PaymentFooter
        buttonPressHandler={ButtonPressHandler}
        buttonTitle={`Pay with ${paymentMode} `}
        price={{price: route.params.amount, currency: '$'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  ScrollView: {
    flexGrow: 1,
  },
  LottieAnimation: {
    flex: 1,
  },
  HeaderContainer: {
    paddingHorizontal: SPACING.space_24,
    paddingVertical: SPACING.space_15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  HeaderText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex,
  },
  EmptyView: {
    height: SPACING.space_20 * 2,
    width: SPACING.space_20 * 2,
  },
  PaymentOptionContainer: {
    padding: SPACING.space_16,
    gap: SPACING.space_16,
  },
});

export default PaymentScreen;
