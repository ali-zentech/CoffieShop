import {
  ImageBackground,
  ImageProps,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import GradientBGIcon from './GradientBGIcon';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import HeaderBar from './HeaderBar';
import CustomIcons from './CustomIcons';

interface ItemInfo {
  imagelink_portrait: ImageProps;
  type: string;
  id: string;
  favourite: boolean;
  name: string;
  special_ingredient: string;
  ingredients: string;
  average_rating: number;
  ratings_count: string;
  roasted: string;
}

interface ImageBacgroundInfoProps {
  enableBackHandler: Boolean;
  ItemInfo: ItemInfo;
  toggleFavourite: any;
  backHandler?: any;
}
const ImageBackgroundInfo: React.FC<ImageBacgroundInfoProps> = ({
  enableBackHandler,
  ItemInfo,
  toggleFavourite,
  backHandler,
}) => {
  return (
    <View style={[styles.container]}>
      <ImageBackground
        source={ItemInfo.imagelink_portrait}
        style={styles.ItemBackgroundImage}>
        <View
          style={[
            styles.HeaderButtons,
            {justifyContent: enableBackHandler ? 'space-between' : 'flex-end'},
          ]}>
          {enableBackHandler ? (
            <TouchableOpacity
              onPress={() => {
                backHandler();
              }}>
              <GradientBGIcon
                name="left"
                color={COLORS.primaryDarkGreyHex}
                size={FONTSIZE.size_16}
              />
            </TouchableOpacity>
          ) : (
            <> </>
          )}
          <TouchableOpacity
            onPress={() => {
              toggleFavourite(ItemInfo.favourite, ItemInfo.type, ItemInfo.id);
            }}>
            <GradientBGIcon
              name="like"
              color={
                ItemInfo.favourite
                  ? COLORS.primaryRedHex
                  : COLORS.primaryLightGreyHex
              }
              size={FONTSIZE.size_16}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.ImageInfoOuterContainer}>
          <View style={styles.ImageInfoInnerContainer}>
            <View style={styles.InfoContainerRow}>
              <View>
                <Text style={styles.ItemTitleText}>{ItemInfo.name}</Text>
                <Text style={styles.ItemSubtitleText}>
                  {ItemInfo.special_ingredient}
                </Text>
              </View>
              <View style={styles.ItemPropertiesContainer}>
                <View style={styles.ProperFirst}>
                  <CustomIcons
                    name={ItemInfo.type == 'Bean' ? 'bean' : 'beans'}
                    size={
                      ItemInfo.type == 'Bean'
                        ? FONTSIZE.size_18
                        : FONTSIZE.size_24
                    }
                    color={COLORS.primaryOrangeHex}
                  />
                  <Text
                    style={[
                      styles.PropertyTextFirst,
                      {
                        marginTop:
                          ItemInfo.type == 'Bean'
                            ? SPACING.space_4 + SPACING.space_2
                            : 0,
                      },
                    ]}>
                    {ItemInfo.type}
                  </Text>
                </View>
                <View style={styles.ProperFirst}>
                  <CustomIcons
                    name={ItemInfo.type == 'Bean' ? 'location' : 'drop'}
                    size={FONTSIZE.size_16}
                    color={COLORS.primaryOrangeHex}
                  />
                  <Text style={styles.PropertyTextLast}>
                    {ItemInfo.ingredients}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.InfoContainerRow}>
              <View style={styles.RatingContainer}>
                <CustomIcons
                  name={'star'}
                  color={COLORS.primaryOrangeHex}
                  size={FONTSIZE.size_20}
                />
                <Text style={styles.RatingText}>{ItemInfo.average_rating}</Text>
                <Text style={styles.RatingCountText}>
                  ({ItemInfo.ratings_count})
                </Text>
              </View>
              <View style={styles.RoastedContainer}>
                <Text style={styles.RoastedText}>{ItemInfo.roasted}</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ImageBackgroundInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ItemBackgroundImage: {
    width: '100%',
    aspectRatio: 20 / 25,
    justifyContent: 'space-between',
  },
  HeaderButtons: {
    flex: 1,
    flexDirection: 'row',
    padding: SPACING.space_20,
    alignContent: 'center',
  },
  ImageInfoOuterContainer: {
    paddingVertical: SPACING.space_24,
    paddingHorizontal: SPACING.space_30,
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopLeftRadius: BORDERRADIUS.radius_20 * 2,
    borderTopRightRadius: BORDERRADIUS.radius_20 * 2,
  },
  ImageInfoInnerContainer: {
    justifyContent: 'space-between',
    gap: SPACING.space_15,
  },
  InfoContainerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ItemTitleText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_24,
    color: COLORS.primaryWhiteHex,
  },
  ItemSubtitleText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_12,
    color: COLORS.primaryWhiteHex,
  },
  ItemPropertiesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.space_20,
  },
  ProperFirst: {
    height: 55,
    width: 55,
    borderRadius: BORDERRADIUS.radius_15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primaryBlackHex,
  },
  PropertyTextFirst: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_10,
    color: COLORS.primaryWhiteHex,
  },
  PropertyTextLast: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_10,
    color: COLORS.primaryWhiteHex,
    marginTop: SPACING.space_2 + SPACING.space_4,
  },
  RatingContainer: {
    flexDirection: 'row',
    gap: SPACING.space_10,
    alignItems: 'center',
  },
  RatingText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryWhiteHex,
  },
  RatingCountText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_12,
    color: COLORS.primaryWhiteHex,
  },
  RoastedContainer: {
    height: 55,
    width: 55 * 2 + SPACING.space_20,
    borderRadius: BORDERRADIUS.radius_15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primaryBlackHex,
  },
  RoastedText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_10,
    color: COLORS.primaryWhiteHex,
  },
});
