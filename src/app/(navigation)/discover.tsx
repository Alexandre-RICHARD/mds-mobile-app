import { StyleSheet, View, Text } from 'react-native';


export default function Discover() {
  return (
      <View style={styles.titleContainer}>
        <Text>Ici on decouvre fort</Text>
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
