import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import { OpaqueColorValue } from 'react-native';
import { SymbolWeight } from 'expo-symbols';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Fontisto from '@expo/vector-icons/Fontisto';
import Foundation from '@expo/vector-icons/Foundation';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Octicons from '@expo/vector-icons/Octicons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Zocial from '@expo/vector-icons/Zocial';

const ICON_FAMILIES: Record<IconFamily, React.ComponentType<any>> = {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
};

export enum IconFamily {
  AntDesign = 'AntDesign',
  Entypo = 'Entypo',
  EvilIcons = 'EvilIcons',
  Feather = 'Feather',
  FontAwesome = 'FontAwesome',
  FontAwesome5 = 'FontAwesome5',
  FontAwesome6 = 'FontAwesome6',
  Fontisto = 'Fontisto',
  Foundation = 'Foundation',
  Ionicons = 'Ionicons',
  MaterialCommunityIcons = 'MaterialCommunityIcons',
  MaterialIcons = 'MaterialIcons',
  Octicons = 'Octicons',
  SimpleLineIcons = 'SimpleLineIcons',
  Zocial = 'Zocial',
};

export enum Icons {
  MaterialIcons_Mode_Of_Travel = 'mode-of-travel',
  MaterialCommunityIcons_Group = 'account-group-outline',
  FontAwesome6_Compass = 'compass',
  Fontisto_Map = 'map',
}

type AllowedIcons = ({
  family: IconFamily.AntDesign,
  name: ''
}) | ({
  family: IconFamily.Entypo,
  name: ''
}) | ({
  family: IconFamily.EvilIcons,
  name: ''
}) | ({
  family: IconFamily.Feather,
  name: ''
}) | ({
  family: IconFamily.FontAwesome,
  name: ''
}) | ({
  family: IconFamily.FontAwesome5,
  name: ''
}) | ({
  family: IconFamily.FontAwesome6,
  name: Icons.FontAwesome6_Compass
}) | ({
  family: IconFamily.Fontisto,
  name: Icons.Fontisto_Map
}) | ({
  family: IconFamily.Foundation,
  name: ''
}) | ({
  family: IconFamily.Ionicons,
  name: ''
}) | ({
  family: IconFamily.MaterialCommunityIcons,
  name: Icons.MaterialCommunityIcons_Group,
}) | ({
  family: IconFamily.MaterialIcons,
  name: Icons.MaterialIcons_Mode_Of_Travel
}) | ({
  family: IconFamily.Octicons,
  name: ''
}) | ({
  family: IconFamily.SimpleLineIcons,
  name: ''
}) | ({
  family: IconFamily.Zocial,
  name: ''
});

type Props = AllowedIcons & {
  color: string | OpaqueColorValue;
  size?: number;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
};

export function IconSymbol({
  family,
  name,
  color,
  size = 24,
  style,
  weight,
}: Props) {
  const IconComponent = ICON_FAMILIES[family];

  if (!IconComponent) {
    console.warn(`Icon family '${family}' not found.`);
    return null;
  }

  return (
    <IconComponent name={name} size={size} color={color} style={style} weight={weight} />
  );
}
