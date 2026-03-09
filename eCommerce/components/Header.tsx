import { View, Text, TouchableOpacity, TextInput } from "react-native";
import {
  ChartNoAxesGantt,
  ShoppingCart,
  Search,
  ScanLine,
} from "lucide-react-native";

type HeaderProps = {
  title: string;
  onMenuPress?: () => void;
  onCartPress?: () => void;
};

export default function Header({
  title,
  onMenuPress,
  onCartPress,
}: HeaderProps) {
  return (
    <View className="bg-white border-b border-gray-200">
      <View className="h-[60px] flex-row items-center px-4">
        <View className="flex-1">
          <TouchableOpacity onPress={onMenuPress}>
            <ChartNoAxesGantt size={24} color="#000" />
          </TouchableOpacity>
        </View>

        <View className="flex-1 items-center">
          <Text className="text-lg font-semibold">{title}</Text>
        </View>

        <View className="flex-1 items-end">
          <TouchableOpacity onPress={onCartPress}>
            <ShoppingCart size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <View className="px-4 pb-3 flex-row items-center gap-4">
        <View className="flex-1 flex-row items-center bg-gray-100 rounded-2xl px-3">
          <Search size={20} color="#6b7280" />

          <TextInput
            placeholder="Search for products, Medicine ..."
            placeholderTextColor="#6b7280"
            className="flex-1 ml-2 text-md"
          />
        </View>

        <TouchableOpacity className="ml-2p-2 rounded-xl">
          <ScanLine size={22} color="#2563eb" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
