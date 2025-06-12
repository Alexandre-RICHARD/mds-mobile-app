import { Redirect, Slot, Stack } from 'expo-router';
import { useLogin } from '../features/login/useLogin';
import { useEffect } from 'react';

export default function RootLayout() {
  const {isLogin, setIsLogin} = useLogin();

  useEffect(() => {
    console.log(isLogin, 'connection ? ')
  });

  if (!isLogin) {
    return <Redirect href={"/login"} />
  }
  
  return (
    <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(navigation)" />
    </Stack>
  );
}
