import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/Header";
import CategoryCard from "@/components/CategoryCard";
import BannerCarousel from "@/components/BannerCarousel";
import Card from "@/components/Card";
import { useState } from "react";

function TabHome() {
  const categories = [
    "Men's Lifestyle!",
    "Gadgets & Appliances!",
    "Baby",
    "Health",
    "Games",
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
  ];

const [selectedCategory,setSelectedCategory] = useState(0);
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <Header
        title="eCommerce"
        onMenuPress={() => console.log("menu")}
        onCartPress={() => console.log("cart")}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Categories */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-4 px-4 bg-white py-2 mx-4 rounded-lg "
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

        {/* Banner */}
        <BannerCarousel />

        {/* Categoryyy */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-4 px-4"
        >
          <View className="flex-row">
            <CategoryCard title="Shoes" image={require("@/assets/shoes.png")} />
            <CategoryCard title="Bags" image={require("@/assets/bags.jpg")} />
            <CategoryCard
              title="Watches"
              image={require("@/assets/watch.jpg")}
            />
            <CategoryCard title="Bags" image={require("@/assets/bags.jpg")} />
            <CategoryCard title="Shoes" image={require("@/assets/shoes.png")} />
            <CategoryCard title="Bags" image={require("@/assets/bags.jpg")} />
            <CategoryCard
              title="Watches"
              image={require("@/assets/watch.jpg")}
            />
            <CategoryCard title="Bags" image={require("@/assets/bags.jpg")} />
          </View>
        </ScrollView>

        <TouchableOpacity className="mt-4 px-4" activeOpacity={0.6} >
          <Image
            source={require("@/assets/banner2.jpg")}
            className="w-full h-34 rounded-xl"
            resizeMode="cover"
          />
        </TouchableOpacity>

        <View className="mt-6 px-4 flex items-center justify-center">
          <Text className="font-bold text-xl">Trending Now:</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-4 px-4 pb-6"
        >
          {products.map((item, idx) => (
            <Card key={idx} {...item} />
          ))}
        </ScrollView>

        <View className="mt-6 px-4 flex items-center justify-center">
          <Text className="font-bold text-xl">Hot Deals of the Week:</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-4 px-4 pb-6"
        >
          {products.map((item, idx) => (
            <Card key={idx} {...item} />
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

export default TabHome;
