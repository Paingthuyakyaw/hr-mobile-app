import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "./ui/theme/theme-provider";

const CustomHeader = () => {
  const { toggleTheme, theme } = useTheme();
  return (
    <View className=" bg-card">
      <View style={styles.container}>
        {/* Middle Section */}
        <View className=" gap-0 ">
          <Text className=" text-text-primary text-lg font-bold">
            HR Portal
          </Text>
          <Text className=" font-normal text-sm text-text-secondary">
            Employee Management
          </Text>
        </View>

        {/* Right Section */}
        <View className=" gap-2 " style={styles.rightSection}>
          <TouchableOpacity
            onPress={toggleTheme}
            className=" bg-card-muted w-[35px] h-[35px] rounded-full flex items-center justify-center "
          >
            <Ionicons
              name={theme == "light" ? "moon-outline" : "sunny-outline"}
              size={20}
              className=" !text-text-primary"
            />
          </TouchableOpacity>

          <TouchableOpacity className=" bg-card-muted w-[35px] h-[35px] rounded-full flex items-center justify-center ">
            <View>
              <Ionicons
                name="notifications-outline"
                size={22}
                className=" !text-text-primary"
              />
              <View style={styles.dot} />
            </View>
          </TouchableOpacity>

          <View style={styles.profileCircle}>
            <Text style={styles.profileText}>JA</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
    height: 70,
  },
  titleContainer: { flex: 1, marginLeft: 10 },
  mainTitle: { fontSize: 18, fontWeight: "bold", color: "#000" },
  subTitle: { fontSize: 12, color: "#888" },
  rightSection: { flexDirection: "row", alignItems: "center" },
  iconButton: {
    marginHorizontal: 8,
    padding: 5,
    backgroundColor: "#f5f5f5",
    borderRadius: 20,
  },
  profileCircle: {
    width: 35,
    height: 35,
    borderRadius: 18,
    backgroundColor: "#1d4ed8",
    justifyContent: "center",
    alignItems: "center",
  },
  profileText: { color: "#fff", fontWeight: "bold", fontSize: 12 },
  dot: {
    position: "absolute",
    right: 2,
    top: 2,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "red",
  },
});

export default CustomHeader;
