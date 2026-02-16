import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const AttandanceCard = () => {
  return (
    <View style={style.container} className=" bg-card">
      <View style={style.box}>
        <Text className=" text-text-primary" style={style.fontW}>
          Today's Attendance
        </Text>
        <View className=" bg-green/20 py-1 px-3 rounded-full ">
          <Text className=" text-sm text-success">Checked In</Text>
        </View>
      </View>
      <View className="mt-4 flex flex-row justify-between items-center">
        <View className="  items-center flex flex-row gap-3">
          <View className=" rounded-full px-2 bg-success/20 p-2 ">
            <Ionicons
              name={"time-outline"}
              size={25}
              color={"rgb(34 197 94)"}
            />
          </View>
          <View className=" gap-1">
            <Text className=" text-[11px] text-text-secondary">
              CheckIn Time
            </Text>
            <Text className=" font-bold text-text-primary ">09:00 AM</Text>
          </View>
        </View>
        <View className=" items-end gap-1">
          <Text className=" text-[11px] text-text-secondary">
            Working Hours
          </Text>
          <Text className=" flex flex-row font-bold text-text-primary ">
            5h 30m
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AttandanceCard;

const style = StyleSheet.create({
  container: {
    borderRadius: 20,
    padding: 20,
  },
  box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  fontW: {
    fontWeight: 600,
  },
  fontSmall: {
    fontSize: 11,
  },
});
