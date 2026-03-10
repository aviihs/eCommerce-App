import React from "react";
import { Modal, Text, Pressable, Image } from "react-native";

type Props = {
  visible: boolean;
  onClose: () => void;
};

const AboutAppModal = ({ visible, onClose }: Props) => {
  return (
    <Modal transparent animationType="fade" visible={visible}>
      {/* Background Overlay */}
      <Pressable
        onPress={onClose}
        className="flex-1 bg-black/40 justify-center items-center"
      >
        <Pressable className="bg-white w-[85%] rounded-2xl p-5">
          <Image
            source={require("../assets/images/logo.png")}
            className="w-30 h-30 self-center mb-4"
            resizeMode="contain"
          />

          <Text className="text-xl font-semibold text-center mb-2">
            About This App
          </Text>

          <Text className="text-gray-600 text-center mb-5">
            This eCommerce app is built with React Native. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quia fugit aut necessitatibus obcaecati magni sapiente adipisci at explicabo sed?
          </Text>

          <Pressable
            onPress={onClose}
            className="bg-[#2563eb] active:bg-[#1e40af] py-3 rounded-lg"
          >
            <Text className="text-white text-center font-medium">Close</Text>
          </Pressable>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default AboutAppModal;
