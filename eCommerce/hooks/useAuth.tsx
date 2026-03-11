import { useState } from "react";
import { showToast } from "../utils/toast";
import { Router } from "expo-router";

interface SignupData {
  name: string;
  email: string;
  phone: string;
  password: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const userShiva = {
  email: "shiva@gmail.com",
  password: "shiva@gmail.com",
};

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  // Signup
  const signup = (data: SignupData, router: Router) => {
    const { name, email, phone, password } = data;

    if (!name || !email || !phone || !password) {
      showToast("error", "Missing Fields", "Please fill all fields");
      return false;
    }

    const newUser: User = {
      id: Date.now(),
      name,
      email,
      phone,
    };

    setUser(newUser);

    showToast("success", "Account Created", "User created successfully");

    setTimeout(() => {
      router.replace("/login");
    }, 500);

    return true;
  };

  // LOgin
  const login = (email: string, password: string) => {
    if (!email || !password) {
      showToast("error", "Missing Fields", "Enter email and password");
      return false;
    }

    if (email === userShiva.email && password === userShiva.password) {
      showToast("success", "Login Successful", "Welcome Shiva");
      return true;
    }

    showToast("error", "Login Failed", "Invalid email or password");
    return false;
  };

  return {
    user,
    signup,
    login,
  };
};