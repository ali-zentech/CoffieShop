import React from 'react';
import {Text} from 'react-native';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from '../../sellection.json';

const CustomIcons = createIconSetFromIcoMoon(icoMoonConfig);

interface CustomIconsProps {
  name: string;
  size: number;
  color: string;
}

const CustomIconsComponent: React.FC<CustomIconsProps> = ({
  name,
  size,
  color,
}) => {
  return <CustomIcons name={name} size={size} color={color} />;
};

export default CustomIconsComponent;
