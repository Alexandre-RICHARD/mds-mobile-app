import { StyleSheet, View, Text } from 'react-native';
import { useLogin } from '../../features/login/useLogin';


export default function MyTrip() {
  const {isLogin, setIsLogin} = useLogin();

  return (
    <View style={styles.titleContainer}>
      <Text>My trip !</Text>
      {isLogin ? <Text>Connecté</Text> : <Text>Pas connecté</Text>}
      <button>
        
      </button>
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
