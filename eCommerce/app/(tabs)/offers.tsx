import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/Header";

function offer() {
  return (
    <SafeAreaView className="flex-1 bg-white">

      <Header
        title="eCommerce"
        onMenuPress={() => console.log("menu")}
        onCartPress={() => console.log("cart")}
      />

      <View className="flex-1 items-center justify-center">
        <Text className="text-xl font-semibold">Offers</Text>
        <Text className="text-gray-500">Offers Contents are here......</Text>
      </View>

    </SafeAreaView>
  );
}

export default offer;