import { StyleSheet, View, Text } from 'react-native';


export default function Social() {
  return (
      <View style={styles.titleContainer}>
        <Text>social partie</Text>
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
