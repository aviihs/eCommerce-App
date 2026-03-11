import { ScrollView, Text, TextInput, Pressable, Image } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

export default function Login() {
  const router = useRouter();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const success = login(email, password);

    if (success) {
      setTimeout(() => {
        router.replace("/(tabs)");
      }, 500);
    }
  };

  return (
    <ScrollView
      className="bg-white px-6"
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "center",
        paddingBottom: 16,
      }}
    >
      <Image
        source={require("../assets/images/logo.png")}
        className="w-72 h-72 mb-10 ml-8"
        resizeMode="contain"
      />

      <Text className="text-3xl font-bold mb-10 text-center">Login</Text>

      <TextInput
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        className="border border-gray-300 rounded-xl px-5 py-4 mb-4"
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        className="border border-gray-300 rounded-xl px-5 py-4 mb-6"
      />

      <Pressable className="bg-[#2563eb] py-4 rounded-xl" onPress={handleLogin}>
        <Text className="text-white text-center text-lg font-semibold">
          Login
        </Text>
      </Pressable>

      <Pressable className="mt-6" onPress={() => router.push("/signup")}>
        <Text className="text-center text-gray-500">
          Don&apos;t have account?
          <Text className="text-[#2563eb]"> Sign Up</Text>
        </Text>
      </Pressable>
    </ScrollView>
  );
}

