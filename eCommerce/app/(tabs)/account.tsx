import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import Header from "@/components/Header";
import SettingsItem from "@/components/SettingsItem";
import SettingsSections from "@/components/SettingSections";
import LanguageModal from "@/components/LanguageModal";
import AboutAppModal from "@/components/AboutAppModal";
import { useRouter } from "expo-router";


export default function Account() {
 const router = useRouter();

  const [openLang, setOpenLang] = useState(false);
  const [language, setLanguage] = useState("English");
  const [aboutVisible, setAboutVisible] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <Header
        title="Account"
        onMenuPress={() => console.log("menu")}
        onCartPress={() => console.log("cart")}
      />

      <ScrollView className="px-3">
        <SettingsSections>
          <SettingsItem icon="log-in-outline" title="Login" onPress={() => router.replace("/login")}/>
          <SettingsItem icon="person-outline" title="Join eCommerce" onPress={() => router.replace("/signup")}/>
        </SettingsSections>

        <SettingsSections title="Language Settings">
          <SettingsItem
            icon="language-outline"
            title={language}
            onPress={() => setOpenLang(true)}
          />
        </SettingsSections>

        <LanguageModal
          visible={openLang}
          onClose={() => setOpenLang(false)}
          language={language}
          setLanguage={setLanguage}
        />

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
          <SettingsItem
            icon="information-circle-outline"
            title="About eCommerce"
          />

          <SettingsItem
            icon="apps-outline"
            title="About App"
            onPress={() => setAboutVisible(true)}
          />
        </SettingsSections>
        <AboutAppModal
          visible={aboutVisible}
          onClose={() => setAboutVisible(false)}
        />

        <View className="h-10" />
      </ScrollView>
    </SafeAreaView>
  );
}
