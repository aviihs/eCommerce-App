import React, { useState } from "react";
import { Modal, View, Text, TouchableOpacity, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  visible: boolean;
  onClose: () => void;
  language: string;
  setLanguage: (lang: string) => void;
};

const LanguageModal = ({ visible, onClose, language, setLanguage }: Props) => {
  const [selected, setSelected] = useState(language);

  const handleOk = () => {
    setLanguage(selected);
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View className="flex-1 justify-end">
        <Pressable className="absolute inset-0 bg-black/40" onPress={onClose} />
        <View className="bg-white rounded-t-2xl p-5">
          <Text className="text-lg font-semibold mb-4">Select Language</Text>

          <TouchableOpacity
            onPress={() => setSelected("English")}
            className="flex-row justify-between py-3"
          >
            <Text className="text-base">English</Text>

            {selected === "English" && (
              <Ionicons name="checkmark" size={20} color="#2563eb" />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setSelected("नेपाली")}
            className="flex-row justify-between py-3"
          >
            <Text className="text-base">नेपाली</Text>

            {selected === "नेपाली" && (
              <Ionicons name="checkmark" size={20} color="#2563eb" />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleOk}
            className="bg-blue-600 mt-4 py-3 rounded-xl"
          >
            <Text className="text-white text-center font-semibold">OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default LanguageModal;
