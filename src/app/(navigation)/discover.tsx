import { StyleSheet, View, Text } from 'react-native';
import { useLogin } from '../../features/login/useLogin';


export default function Discover() {
  const {isLogin, setIsLogin} = useLogin();

  return (
    <View style={styles.titleContainer}>
      <Text>Ici on decouvre fort</Text>
      {isLogin ? <Text>Connecté</Text> : <Text>Pas connecté</Text>}
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
