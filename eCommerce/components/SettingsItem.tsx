import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { Ionicons } from "@expo/vector-icons"

type SettingsItemProps = {
  icon: keyof typeof Ionicons.glyphMap
  title: string
  onPress?: () => void
}

const SettingsItem: React.FC<SettingsItemProps> = ({
  icon,
  title,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-row items-center justify-between px-4 py-4 border-b border-gray-200"
    >
      <View className="flex-row items-center gap-3">
        <Ionicons name={icon} size={22} color="#333" />

        <Text className="text-base text-gray-800">
          {title}
        </Text>
      </View>

      <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
    </TouchableOpacity>
  )
}

export default SettingsItem