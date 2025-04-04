import { Tabs } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';
import { IconFamily, Icons, IconSymbol } from '../../components/IconSymbol';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}>
      <Tabs.Screen
        name="discover"
        options={{
          title: 'Discover',
          tabBarIcon: () => <IconSymbol family={IconFamily.FontAwesome6} name={Icons.FontAwesome6_Compass} color={"#0F0F0"} />,
        }}
      />
      <Tabs.Screen
        name="myTrip"
        options={{
          title: 'My Trip',
          tabBarIcon: () => <IconSymbol family={IconFamily.Fontisto} name={Icons.Fontisto_Map} color={"#0F0F0"} />,
        }}
      />
      <Tabs.Screen
        name="social"
        options={{
          title: 'Social',
          tabBarIcon: () => <IconSymbol family={IconFamily.MaterialCommunityIcons} name={Icons.MaterialCommunityIcons_Group} color={"#0F0F0"} />,
        }}
      />
    </Tabs>
  );
}
