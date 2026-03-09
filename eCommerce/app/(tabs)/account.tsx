import { View, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import Header from "@/components/Header"
import SettingsItem from "@/components/SettingsItem"
import SettingsSections from "@/components/SettingSections"

export default function Account() {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">

      <Header
        title="Account"
        onMenuPress={() => console.log("menu")}
        onCartPress={() => console.log("cart")}
      />

      <ScrollView className="px-3">

        <SettingsSections>
          <SettingsItem icon="log-in-outline" title="Login" />
          <SettingsItem icon="person-outline" title="Join Jeevee" />
        </SettingsSections>

        <SettingsSections title="Language Settings">
          <SettingsItem icon="language-outline" title="English" />
        </SettingsSections>

        <SettingsSections title="Customer Care">
          <SettingsItem icon="warning-outline" title="Report an Issue" />
          <SettingsItem icon="call-outline" title="Contact Us" />
        </SettingsSections>

        <SettingsSections>
          <SettingsItem icon="chatbubble-outline" title="Feedback" />
        </SettingsSections>

        <SettingsSections title="Legal and Policies">
          <SettingsItem icon="document-text-outline" title="Policies" />
          <SettingsItem icon="reader-outline" title="Terms and Conditions" />
          <SettingsItem icon="information-circle-outline" title="About Jeevee" />
          <SettingsItem icon="apps-outline" title="About App" />
        </SettingsSections>

        <View className="h-10" />

      </ScrollView>

    </SafeAreaView>
  )
}