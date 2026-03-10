import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/Header";
import { useState } from "react";
import Card from "@/components/Card";

function Quicke() {
  const categories = [
    "Trendy items!",
    "Baby Toys",
    "Western Wears",
    "Kurtas",
    "Jwellery",
    "Baby Care",
  ];
  const products = [
    {
      image: require("@/assets/watch.jpg"),
      title: "Luxury Watch",
      desc: "High quality watch, Lates Models",
      price: 2499,
      oldPrice: 3999,
      discount: 38,
      rating: 4.5,
    },
    {
      image: require("@/assets/shoes.png"),
      title: "GoldStar Shoes",
      desc: "High quality Shoes, Slippers with 40% off",
      price: 1200,
      oldPrice: 2000,
      discount: 40,
      rating: 4.5,
    },
    {
      image: require("@/assets/earbuds.jpeg"),
      title: "Bluetooth Earbuds",
      desc: "Good, Compact & powerful sound",
      price: 1999,
      oldPrice: 2999,
      discount: 33,
      rating: 4.2,
    },
    {
      image: require("@/assets/shoes.png"),
      title: "GoldStar Shoes",
      desc: "High quality Shoes, Slippers with 40% off",
      price: 1200,
      oldPrice: 2000,
      discount: 40,
      rating: 4.5,
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(0);
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <Header
        title="eCommerce"
        onMenuPress={() => console.log("menu")}
        onCartPress={() => console.log("cart")}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity className="mt-4 px-4" activeOpacity={0.6}>
          <Image
            source={require("@/assets/Exc.jpg")}
            className="w-[100%] h-64 rounded-xl"
            resizeMode="cover"
          />
        </TouchableOpacity>
        <View className="mt-4 px-4 flex-row gap-3">
          <TouchableOpacity className="flex-1" activeOpacity={0.6}>
            <Image
              source={require("@/assets/off.png")}
              className="w-full h-32 rounded-xl border-[6px] border-blue-500"
              resizeMode="cover"
            />
          </TouchableOpacity>

          <TouchableOpacity className="flex-1" activeOpacity={0.6}>
            <Image
              source={require("@/assets/offff.jpg")}
              className="w-full h-32 rounded-xl border-[6px] border-blue-500"
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-4 px-4 bg-white py-2 mx-4 rounded-lg"
          contentContainerStyle={{ paddingRight: 16 }}
        >
          {categories.map((item, index) => {
            const isActive = selectedCategory === index;

            return (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedCategory(index)}
                className={`rounded-lg px-3 py-2 mr-3 ${
                  isActive ? "bg-[#0051ff53]" : "bg-none"
                }`}
              >
                <Text
                  className={`text-sm font-medium ${
                    isActive ? "text-[#0051ff]" : "text-black"
                  }`}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        <View className="mt-4 px-4 pb-6 flex-row flex-wrap justify-between">
          {products.map((item, idx) => (
            <TouchableOpacity
              key={idx}
              className="w-[48%] mb-4"
              activeOpacity={0.6}
              onPress={() => console.log("Clicked:", item.title)}
            >
              <Card {...item} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Quicke;
