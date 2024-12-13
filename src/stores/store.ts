import {create} from 'zustand';
import {produce} from 'immer';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage, {
  useAsyncStorage,
} from '@react-native-async-storage/async-storage';
import CoffieData from '../data/CoffieData';
import BeansData from '../data/BeansData';

export const useStore = create(
  persist(
    (set, get) => ({
      CoffieList: CoffieData,
      BeansList: BeansData,
      Favoirites: [],
      CartList: [],
      OrderHistoryList: [],
      CartPrice: 0,
    }),
    {
      name: 'coffie_shop',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
