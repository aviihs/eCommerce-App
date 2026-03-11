import { View, Text, Pressable, Image } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-white px-6">
      <Pressable
        className="absolute top-12 right-6 px-6 py-2 bg-blue-500 rounded-lg"
        onPress={() => router.replace("/(tabs)")}
      >
        <Text className="text-white text-base font-semibold">Skip</Text>
      </Pressable>

      <View className="flex-1 items-center justify-center">
        <Image
          source={require("../assets/images/logo.png")}
          className="w-72 h-72 mb-10"
          resizeMode="contain"
        />

        <Pressable
          className="w-full bg-[#2563eb] py-4 rounded-xl mb-4 active:opacity-50"
          onPress={() => router.push("/login")}
        >
          <Text className="text-white text-center text-lg font-semibold">
            Log In
          </Text>
        </Pressable>

        <Pressable
          className="w-full bg-[#2563eb] py-4 rounded-xl"
          onPress={() => router.push("/signup")}
        >
          <Text className="text-white text-center text-lg font-semibold">
            Sign Up
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
