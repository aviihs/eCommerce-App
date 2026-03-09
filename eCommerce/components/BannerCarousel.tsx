import { View, Image, Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { useState } from "react";

const { width } = Dimensions.get("window");

const banners = [
  require("@/assets/banner1.jpg"),
  require("@/assets/banner2.jpg"),
  require("@/assets/banner3.jpg"),
];

export default function BannerCarousel() {
  const [index, setIndex] = useState(0);

  return (
    <View className="mt-4">
      {/* Carousel */}
      <Carousel
        loop
        width={width}
        height={360}
        autoPlay
        data={banners}
        autoPlayInterval={4000}
        scrollAnimationDuration={800}
        onSnapToItem={(i) => setIndex(i)}
        renderItem={({ item }) => (
          <View className="px-4">
            <Image
              source={item}
              className="w-full h-full rounded-xl"
              resizeMode="cover"
            />
          </View>
        )}
      />

      {/* Paginationss for BCarousels */}
      <View className="flex-row justify-center mt-2">
        {banners.map((_, i) => (
          <View
            key={i}
            className={`mx-1 h-[6px] rounded-full ${
              index === i ? "w-[6px] bg-black" : "w-[6px] bg-gray-300"
            }`}
          />
        ))}
      </View>
    </View>
  );
}
