import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useStore} from '../stores/store';
import {COLORS} from '../theme/theme';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import HeaderBar from '../components/HeaderBar';
import PaymentFooter from '../components/PaymentFooter';
import EmptyListAnimation from '../components/EmptyListAnimation';
import CartItem from '../components/CartItem';

const CartScreen = ({navigation, route}: any) => {
  const tabBarHeight = useBottomTabBarHeight();

  const CartList = useStore((state: any) => state.CartList);
  const CartPrice = useStore((state: any) => state.CartPrice);

  const incrementCartItemQuantity = useStore(
    (state: any) => state.incrementCartItemQuantity,
  );
  const decrementCartItemQuantity = useStore(
    (state: any) => state.decrementCartItemQuantity,
  );
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);
  const incrementCartItemQuantityHandler = (id: string, size: string) => {
    incrementCartItemQuantity(id, size);
    calculateCartPrice();
  };

  const decrementCartItemQuantityHandler = (id: string, size: string) => {
    decrementCartItemQuantity(id, size);
    calculateCartPrice();
  };
  const buttonPressHandler = () => {
    navigation.push('Payment', {amount: CartPrice});
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollView}>
        <View
          style={[styles.ScrollViewInnerView, {marginBottom: tabBarHeight}]}>
          <View style={styles.ItemContainer}>
            {/* {Header} */}
            <HeaderBar title="Cart" />
            {/* {Cart list if its their else a animation lottie} */}
            {CartList.length != 0 ? (
              <View>
                {CartList.map((data: any) => {
                  return (
                    <TouchableOpacity
                      key={data.id}
                      onPress={() => {
                        navigation.push('Details', {
                          index: data.index,
                          id: data.id,
                          type: data.type,
                        });
                      }}>
                      <CartItem
                        id={data.id}
                        name={data.name}
                        imagelink_square={data.imagelink_square}
                        special_ingredient={data.special_ingredient}
                        roasted={data.roasted}
                        prices={data.prices}
                        type={data.type}
                        incrementCartItemQuantityHandler={
                          incrementCartItemQuantityHandler
                        }
                        decrementCartItemQuantityHandler={
                          decrementCartItemQuantityHandler
                        }
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : (
              <EmptyListAnimation title="Nothing Here" />
            )}
          </View>

          {CartList.length != 0 ? (
            <PaymentFooter
              buttonPressHandler={buttonPressHandler}
              buttonTitle="Pay"
              price={{price: CartPrice, currency: '$'}}
            />
          ) : (
            <></>
          )}
        </View>
      </ScrollView>
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
  ScrollViewInnerView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  ItemContainer: {
    flex: 1,
  },
  InnerScrollView: {},
});

export default CartScreen;
