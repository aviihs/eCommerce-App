import {
  Modal,
  View,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";
import { useEffect, useRef } from "react";
import SideMenuContent from "./SideMenuContent";

type Props = {
  visible: boolean;
  onClose: () => void;
};

const screenWidth = Dimensions.get("window").width;
const menuWidth = screenWidth * 0.75;

export default function SideMenuModal({ visible, onClose }: Props) {
  const slideAnim = useRef(new Animated.Value(-menuWidth)).current;

  useEffect(() => {
    if (visible) {
      Animated.spring(slideAnim, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: -menuWidth,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  return (
    <Modal transparent visible={visible} animationType="none">
      <View className="flex-1 flex-row">
        {/* Drawer */}
        <Animated.View
          style={{
            width: menuWidth,
            transform: [{ translateX: slideAnim }],
          }}
          className="bg-white h-full pt-6 px-4"
        >
          {/* Menu Content */}
          <SideMenuContent />
        </Animated.View>

        {/* Overlay */}
        <TouchableOpacity
          className="flex-1 bg-black/40"
          activeOpacity={1}
          onPress={onClose}
        />
      </View>
    </Modal>
  );
}
