import {
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Dispatch, SetStateAction} from 'react';
import CustomIcons from './customIcons';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';

interface SearchBarProps {
  searchText: string;
  setsearchText: Dispatch<SetStateAction<string>>;
  searchFunc: (searchString: string) => void;
  resetSearchFunc?: () => void;
}
const SearchBar: React.FC<SearchBarProps> = ({
  searchText,
  setsearchText,
  searchFunc,
  resetSearchFunc,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          searchFunc(searchText);
        }}>
        <CustomIcons
          style={styles.InputIcon}
          name="search"
          size={FONTSIZE.size_18}
          color={
            searchText.length > 0
              ? COLORS.primaryOrangeHex
              : COLORS.primaryLightGreyHex
          }></CustomIcons>
      </TouchableOpacity>
      <TextInput
        style={styles.TextInputContainer}
        placeholder="Find Your Coffee..."
        value={searchText}
        onChangeText={text => {
          setsearchText(text);
          searchFunc(text);
        }}></TextInput>
      {searchText.length > 0 ? (
        <TouchableOpacity
          onPress={() => {
            if (resetSearchFunc) resetSearchFunc();
          }}>
          <CustomIcons
            style={styles.InputIcon}
            name="close"
            size={FONTSIZE.size_16}
            color={COLORS.primaryLightGreyHex}
          />
        </TouchableOpacity>
      ) : (
        <></>
      )}
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: SPACING.space_24,
    borderRadius: BORDERRADIUS.radius_25,
    backgroundColor: COLORS.primaryDarkGreyHex,
    alignItems: 'center',
  },
  TextInputContainer: {
    flex: 1,
    height: SPACING.space_24 * 2,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
  },
  InputIcon: {
    marginHorizontal: SPACING.space_20,
  },
});
