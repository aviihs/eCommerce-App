import { Tabs } from "expo-router";
import { Home, Search, Zap, Tag, User } from "lucide-react-native";
import Colors from "@/constants/Colors";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.textLight,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.surface,
          borderTopColor: Colors.border,
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Home size={24} color={color} strokeWidth={2} />
          ),
          tabBarLabelStyle: { fontSize: 10, fontWeight: "bold" },
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <Search size={24} color={color} strokeWidth={2} />
          ),
          tabBarLabelStyle: { fontSize: 10, fontWeight: "bold" },
        }}
      />

      <Tabs.Screen
        name="quicke"
        options={{
          title: "Quick Access",
          tabBarIcon: ({ color }) => (
            <Zap size={24} color={color} strokeWidth={2} />
          ),
          tabBarLabelStyle: { fontSize: 10, fontWeight: "bold" },
        }}
      />

      <Tabs.Screen
        name="offers"
        options={{
          title: "Offers",
          tabBarIcon: ({ color }) => (
            <Tag size={24} color={color} strokeWidth={2} />
          ),
          tabBarLabelStyle: { fontSize: 10, fontWeight: "bold" },
        }}
      />

      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ color }) => (
            <User size={24} color={color} strokeWidth={2} />
          ),
          tabBarLabelStyle: { fontSize: 10, fontWeight: "bold" },
        }}
      />
    </Tabs>
  );
}
