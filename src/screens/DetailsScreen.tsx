import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useStore} from '../stores/store';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import ImageBackgroundInfo from '../components/ImageBackgroundInfo';
import PaymentFooter from '../components/PaymentFooter';

const DetailsScreen = ({navigation, route}: any) => {
  const {index, name, type} = route.params;
  const ItemOfIndex = useStore((state: any) =>
    type === 'Coffee' ? state.CoffieList : state.BeanList,
  )[index];

  const addToFavoriteList = useStore((state: any) => state.addToFavoriteList);
  const deleteFromFavoriteList = useStore(
    (state: any) => state.deleteFromFavoriteList,
  );
  const addToCart = useStore((state: any) => state.addToCart);
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);

  const [price, setPrice] = useState(ItemOfIndex.prices[0]);
  const [fullDesc, setFullDesc] = useState(false);

  const toggleFavourite: any = (
    favourite: boolean,
    type: string,
    id: string,
  ) => {
    favourite ? deleteFromFavoriteList(type, id) : addToFavoriteList(type, id);
  };
  const backHandler: any = () => {
    navigation.pop();
  };
  //  {Duplicated to Home Screen}
  const addToCarthandler = ({
    id,
    index,
    name,
    roasted,
    imagelink_square,
    special_ingredient,
    type,
    price,
  }: any) => {
    addToCart({
      id,
      index,
      name,
      roasted,
      imagelink_square,
      special_ingredient,
      type,
      prices: [{...price, quantity: 1}],
    });
    calculateCartPrice();
    navigation.navigate('Tab', {screen: 'Cart'});
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollView}>
        <ImageBackgroundInfo
          ItemInfo={ItemOfIndex}
          enableBackHandler={true}
          toggleFavourite={toggleFavourite}
          backHandler={backHandler}
        />
        {/* {Description Box} */}

        <View style={styles.FooterInfoArea}>
          <Text style={styles.InfoTitle}>Description</Text>
          <TouchableWithoutFeedback
            onPress={() => {
              setFullDesc(prev => !prev);
            }}>
            <Text
              style={styles.DescriptionText}
              numberOfLines={fullDesc ? undefined : 3}>
              {ItemOfIndex.description}
            </Text>
          </TouchableWithoutFeedback>
          <Text style={styles.InfoTitle}>Size</Text>
          <View style={styles.SizeOuterContainer}>
            {ItemOfIndex.prices.map((data: any) => {
              // Extract repeated logic for borderColor and fontSize
              const isSelected = data.size === price.size;
              const borderColor = isSelected
                ? COLORS.primaryOrangeHex
                : COLORS.primaryDarkGreyHex;
              const fontSize =
                ItemOfIndex.type === 'Bean'
                  ? FONTSIZE.size_14
                  : FONTSIZE.size_16;
              const textColor = isSelected
                ? COLORS.primaryOrangeHex
                : COLORS.secondaryLightGreyHex;

              return (
                <TouchableOpacity
                  key={data.size}
                  onPress={() => setPrice(data)}
                  style={[styles.SizeBox, {borderColor}]}>
                  <Text style={[styles.SizeText, {fontSize, color: textColor}]}>
                    {data.size}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <PaymentFooter
            price={price}
            buttonPressHandler={() => {
              addToCarthandler({
                id: ItemOfIndex.id,
                index: ItemOfIndex.index,
                name: ItemOfIndex.name,
                roasted: ItemOfIndex.roasted,
                imagelink_square: ItemOfIndex.imagelink_square,
                special_ingredient: ItemOfIndex.special_ingredient,
                type: ItemOfIndex.type,
                price: price,
              });
            }}
            buttonTitle="Add To Cart"
          />
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
  FooterInfoArea: {
    padding: SPACING.space_20,
  },
  InfoTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
    marginBottom: SPACING.space_10,
  },
  DescriptionText: {
    letterSpacing: 0.5,
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
    marginBottom: SPACING.space_30,
  },
  SizeOuterContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: SPACING.space_20,
  },
  SizeBox: {
    flex: 1,
    backgroundColor: COLORS.primaryDarkGreyHex,
    alignItems: 'center',
    justifyContent: 'center',
    height: SPACING.space_24 * 2,
    borderRadius: BORDERRADIUS.radius_10,
    borderWidth: 2,
  },
  SizeText: {
    fontFamily: FONTFAMILY.poppins_medium,
  },
});

export default DetailsScreen;
