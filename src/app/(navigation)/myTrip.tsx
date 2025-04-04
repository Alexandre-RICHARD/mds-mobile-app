import { StyleSheet, View, Text } from 'react-native';


export default function MyTrip() {
  return (
      <View style={styles.titleContainer}>
        <Text>My trip !</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
