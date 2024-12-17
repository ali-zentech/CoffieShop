import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useStore} from '../stores/store';

const CartScreen = () => {
  const CartList = useStore((state: any) => state.CartList);
  const CartPrice = useStore((state: any) => state.CartPrice);
  // console.log(CartPrice);
  return (
    <View>
      <Text>CartScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CartScreen;
