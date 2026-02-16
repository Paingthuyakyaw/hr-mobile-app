import { Grid, GridItem } from "@/components/ui/grid";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

export const statsData = [
  {
    id: 1,
    title: "Work Hours",
    value: "168",
    suffix: "hrs",
    icon: "time-outline",
    bgColor: "#1E3A5F",
    iconBg: "#0EA5E9", // blue
  },
  {
    id: 2,
    title: "Tasks Done",
    value: "28",
    suffix: "/30",
    icon: "radio-button-on-outline",
    bgColor: "#1E3A5F",
    iconBg: "#D946EF", // pink
  },
  {
    id: 3,
    title: "Performance",
    value: "94",
    suffix: "%",
    icon: "ribbon-outline",
    bgColor: "#1E3A5F",
    iconBg: "#F97316", // orange
  },
  {
    id: 4,
    title: "Team Size",
    value: "12",
    suffix: "members",
    icon: "people-outline",
    bgColor: "#1E3A5F",
    iconBg: "#10B981", // green
  },
];

const ManageCard = () => {
  return (
    <Grid className="gap-4" _extra={{ className: "grid-cols-12" }}>
      {statsData.map((item) => (
        <GridItem key={item.id} _extra={{ className: "col-span-6" }}>
          <View className=" gap-1 p-4 rounded-[18] bg-card">
            <View className=" flex flex-row">
              <View
                className=" p-2 rounded-full"
                style={{ backgroundColor: item.iconBg }}
              >
                <Ionicons name={item.icon as any} color={"white"} size={22} />
              </View>
            </View>
            <View className=" flex flex-row gap-1 mt-2">
              <Text className=" font-bold text-text-primary">{item.value}</Text>
              <Text className=" text-sm text-text-secondary">
                {item.suffix}
              </Text>
            </View>
            <Text className=" text-[11px] text-text-secondary ">
              {item.title}
            </Text>
          </View>
        </GridItem>
      ))}
    </Grid>
  );
};

export default ManageCard;
