import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '../theme/theme';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import HeaderBar from '../components/HeaderBar';
import {useStore} from '../stores/store';
import EmptyListAnimation from '../components/EmptyListAnimation';
import FavoritesItemCard from '../components/FavoritesItemCard';

const FavouritesScreen = ({navigation, routes}: any) => {
  const tabBarHeight = useBottomTabBarHeight();
  const FavouritesList = useStore((state: any) => state.FavoritesList);
  const addToFavoriteList = useStore((state: any) => state.addToFavoriteList);
  const deleteFromFavoriteList = useStore(
    (state: any) => state.deleteFromFavoriteList,
  );
  const ToggleFavourite = (favourite: boolean, type: string, id: string) => {
    favourite ? deleteFromFavoriteList(type, id) : addToFavoriteList(type, id);
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollView}>
        <View
          style={[styles.ScrollViewInnerView, {marginBottom: tabBarHeight}]}>
          {/* {Header} */}
          <HeaderBar title="Favourites" />

          <View style={styles.InnerScrollView}>
            {/* {Favourites list if its their else a animation lottie} */}
            {FavouritesList != 0 ? (
              <View style={styles.ScrollViewList}>
                {FavouritesList.map((data: any) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        navigation.push('Details', {
                          index: data.index,
                          id: data.id,
                          type: data.type,
                        });
                      }}
                      key={data.id}>
                      <FavoritesItemCard
                        id={data.id}
                        imagelink_portrait={data.imagelink_portrait}
                        name={data.name}
                        special_ingredient={data.special_ingredient}
                        type={data.type}
                        ingredients={data.ingredients}
                        average_rating={data.average_rating}
                        ratings_count={data.ratings_count}
                        roasted={data.roasted}
                        description={data.description}
                        favourite={data.favourite}
                        ToggleFavouriteItem={ToggleFavourite}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : (
              <EmptyListAnimation title="No Favourites??? hmmm"></EmptyListAnimation>
            )}
          </View>
          {/* {Footer} */}
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
  InnerScrollView: {
    flex: 1,
  },
  ScrollViewList: {
    flex: 1,
  },
  FavourteItem: {},
});

export default FavouritesScreen;
