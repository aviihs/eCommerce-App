import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/Header";

function explore() {
  return (
    <SafeAreaView className="flex-1 bg-white">

      <Header
        title="eCommerce"
        onMenuPress={() => console.log("menu")}
        onCartPress={() => console.log("cart")}
      />

      <View className="flex-1 items-center justify-center">
        <Text className="text-xl font-semibold">Explore</Text>
        <Text className="text-gray-500">Explore Contents are here......</Text>
      </View>

    </SafeAreaView>
  );
}

export default explore;