import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import { Heart, ShoppingCart, Star } from "lucide-react-native";

interface CardProps {
  image: ImageSourcePropType;
  title: string;
  desc: string;
  price: number | string;
  oldPrice?: number | string;
  discount?: number | string;
  rating?: number;
}

const Card = ({
  image,
  title,
  desc,
  price,
  oldPrice,
  discount,
  rating,
}: CardProps) => {
  return (
    <TouchableOpacity
      className="w-44 bg-white rounded-xl shadow-md mr-3 overflow-hidden"
      activeOpacity={0.6}
    >
      <View className="relative">
        <Image source={image} className="w-full h-32" resizeMode="cover" />

        <View className="absolute left-2 top-2 flex-row items-center bg-black/60 px-2 py-1 rounded-md">
          <Star size={12} color="#FFD700" fill="#FFD700" />
          <Text className="text-white text-xs ml-1">{rating}/5</Text>
        </View>

        <TouchableOpacity className="absolute right-2 top-2 bg-white p-1 rounded-full">
          <Heart size={16} color="red" />
        </TouchableOpacity>
      </View>

      <View className="p-2">
        <Text className="font-semibold text-sm" numberOfLines={1}>
          {title}
        </Text>
        <Text className="text-gray-500 text-xs mt-1" numberOfLines={2}>
          {desc}
        </Text>

        <View className="flex-row items-center mt-2">
          <Text className="text-black font-bold text-sm">Rs {price}</Text>
          {oldPrice && (
            <Text className="text-red-400 text-xs line-through ml-2">
              Rs {oldPrice}
            </Text>
          )}
        </View>

        <View className="flex-row items-center justify-between mt-2">
          {discount && (
            <Text className="text-red-500 text-xs">{discount}% OFF</Text>
          )}

          <TouchableOpacity className="bg-[#2563eb] px-2 py-1 rounded-md flex-row items-center">
            <ShoppingCart size={14} color="white" />
            <Text className="text-white text-xs ml-1">Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
