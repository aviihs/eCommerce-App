import { View, Text, Image, TouchableOpacity } from "react-native";

export default function CategoryCard({ title, image }: any) {
  return (
    <TouchableOpacity className="w-28 h-28 rounded-xl overflow-hidden mr-3">
      <Image
        source={image}
        className="w-full h-full absolute"
        resizeMode="cover"
      />

      <View className="flex-1 justify-end p-2 bg-black/30">
        <Text className="text-white font-semibold text-xs">
          {title.toUpperCase()}
        </Text>
      </View>
    </TouchableOpacity>
  );
}