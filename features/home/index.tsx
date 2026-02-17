import dayjs from "dayjs";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AttandanceCard from "./attandance-card";
import LeaveCard from "./leave-card";
import ManageCard from "./manage-card";

const HomeComponent = () => {
  return (
    <View style={{ gap: 15 }}>
      <View
        style={{
          borderRadius: 20,
          paddingHorizontal: 20,
          paddingTop: 20,
          paddingBottom: 30,
        }}
        className=" w-full  bg-primary-700"
      >
        <View style={style.box}>
          <Text style={style.fontSmall} className=" text-sm">
            Good Morning 👋🏻
          </Text>
          <Text style={style.fontSmall} className="text-sm">
            Current Time
          </Text>
        </View>
        <View style={[style.box, style.space]}>
          <Text
            style={{ fontSize: 20, color: "#fdfcfc", fontWeight: 700 }}
            className=" text-lg"
          >
            Paing Thura Kyaw
          </Text>
          <Text style={style.font}>{dayjs().format("hh:mm")}</Text>
        </View>
        <Text style={style.fontSmall} className=" text-sm">
          Senior Frontend Engineer
        </Text>
        <View className=" flex flex-row">
          <Text style={style.badge} className=" text-sm rounded-full">
            ID : EMP-0001
          </Text>
        </View>
      </View>
      <AttandanceCard />
      <ManageCard />
      <LeaveCard />
      <View className=" h-10 "></View>
    </View>
  );
};

export default HomeComponent;

const style = StyleSheet.create({
  box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  badge: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    color: "#fafafa",
    paddingStart: 10,
    paddingEnd: 10,
    width: "auto",
    marginTop: 8,
    fontWeight: 600,
  },
  font: {
    fontWeight: 600,
    color: "#fafafa",
  },
  fontSmall: {
    fontSize: 11,
    color: "#fafafa",
    fontWeight: 500,
  },
  space: {
    paddingVertical: 3,
  },
});
