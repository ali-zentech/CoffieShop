import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useStore} from '../stores/store';

const getCategoriesFromData = (data: []) => {
  let temp: any = {};
  data.forEach((index, data: any) => {
    if (temp[data[index].name]) {
      temp[data[index].name]++;
    } else {
      temp[data[index].name] = 1;
    }
  });
  let categories = Object.keys(temp);
  categories.unshift('All');
  return categories;
};

const getCoffieList = (category: string, data: any) => {
  if (category == 'All') {
    return data;
  } else {
    let coffieList = data.filter((item: any) => item.name == category);
    return coffieList;
  }
};
const HomeScreen = () => {
  const CoffieList = useStore((state: any) => {
    return state.CoffieList;
  });
  const BeansList = useStore((state: any) => {
    return state.BeansList;
  });
  const [categories, setCategories] = useState(
    getCategoriesFromData(CoffieList),
  );
  const [searchText, setsearchText] = useState(undefined);
  const [categoryIndex, setcategoryIndex] = useState({
    index: 0,
    category: categories[0],
  });
  const [sortedCoffie, setSortedCofffie] = useState(
    getCoffieList(categoryIndex.category, CoffieList),
  );
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
