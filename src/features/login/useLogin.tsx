import { useState } from "react";

export function useLogin() {
  const [isLogin, setIsLogin] = useState(false);

  return {
    isLogin,
    setIsLogin,
  };  
}
