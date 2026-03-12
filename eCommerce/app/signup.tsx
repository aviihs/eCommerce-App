import {
  ScrollView,
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

export default function Signup() {
  const router = useRouter();
  const { signup } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    signup({ name, email, phone, password }, router);
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="height">
      <ScrollView
        className="bg-white px-6"
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          paddingBottom: 100,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <View>
          <Image
            source={require("../assets/images/logo.png")}
            className="w-60 h-60 mb-10 self-center"
            resizeMode="contain"
          />

          <Text className="text-3xl font-bold mb-10 text-center">Sign Up</Text>

          <TextInput
            placeholder="Full Name"
            value={name}
            onChangeText={setName}
            className="border border-gray-300 rounded-xl px-5 py-3 mb-3"
          />

          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            className="border border-gray-300 rounded-xl px-5 py-3 mb-3"
          />

          <TextInput
            placeholder="Phone Number"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            className="border border-gray-300 rounded-xl px-5 py-3 mb-3"
          />

          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            className="border border-gray-300 rounded-xl px-5 py-3 mb-4"
          />

          <Pressable
            className="bg-blue-600 py-3 rounded-xl"
            onPress={handleSignup}
          >
            <Text className="text-white text-center text-lg font-semibold">
              Create Account
            </Text>
          </Pressable>

          <Pressable className="mt-6" onPress={() => router.push("/login")}>
            <Text className="text-center text-gray-500">
              Already have account? <Text className="text-blue-600">Login</Text>
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
