import { Redirect } from 'expo-router';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Switch } from 'react-native';
import { useLogin } from '../features/login/useLogin';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';


export default function Discover() {
  const isConnected = useLogin();

  if (isConnected) {
    return <Redirect href="/(navigation)/myTrip" />; // ou une autre route par défaut
  }

  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [stayConnected, setStayConnected] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion</Text>

      {/* Email / Username */}
      <TextInput
        style={styles.input}
        placeholder="Email ou nom d'utilisateur"
        value={emailOrUsername}
        onChangeText={setEmailOrUsername}
        autoCapitalize="none"
      />

      {/* Password */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.inputPassword}
          placeholder="Mot de passe"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          autoCapitalize="none"
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons
            name={showPassword ? 'eye-off' : 'eye'}
            size={24}
            color="#888"
          />
        </TouchableOpacity>
      </View>

      {/* Stay connected */}
      <View style={styles.switchContainer}>
        <Switch
          value={stayConnected}
          onValueChange={setStayConnected}
        />
        <Text style={styles.switchLabel}>Rester connecté</Text>
      </View>

      {/* Forgot password */}
      <TouchableOpacity>
        <Text style={styles.link}>Mot de passe oublié ?</Text>
      </TouchableOpacity>

      {/* Login button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Se connecter</Text>
      </TouchableOpacity>

      {/* Sign up link */}
      <TouchableOpacity>
        <Text style={styles.link}>Pas de compte ? Créez-en un</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 32,
    textAlign: 'center',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  inputPassword: {
    flex: 1,
    paddingVertical: 12,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  switchLabel: {
    marginLeft: 8,
    fontSize: 16,
  },
  link: {
    color: '#007AFF',
    textAlign: 'center',
    marginTop: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 14,
    borderRadius: 8,
    marginTop: 24,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 16,
  },
});
