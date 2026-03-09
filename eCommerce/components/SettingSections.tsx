import React from "react"
import { View, Text } from "react-native"

type Props = {
  title?: string
  children: React.ReactNode
}

const SettingsSection = ({ title, children }: Props) => {
  return (
    <View className="mt-6">

      {title && (
        <Text className="text-gray-500 text-sm px-4 mb-2">
          {title}
        </Text>
      )}

      <View className="bg-white rounded-xl overflow-hidden">
        {children}
      </View>

    </View>
  )
}

export default SettingsSection