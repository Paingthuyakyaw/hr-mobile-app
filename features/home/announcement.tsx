import { Ionicons, MaterialIcons, Octicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

const AnnounceMent = () => {
  return (
    <View className=" rounded-[20] bg-card p-5 ">
      <View className=" flex-row  pb-4 flex items-center justify-between">
        <Text className=" flex flex-row items-center text-text-primary font-[600]">
          <Octicons name="zap" size={16} color="rgb(37 99 235)" /> Announcements
          Tasks
        </Text>
        <Text className=" text-primary-700 text-[11px] ">
          View all <Ionicons name="arrow-forward" />
        </Text>
      </View>
      <View className="  gap-2">
        {fakeAnnouncements.splice(0, 3).map((item) => (
          <View className="rounded-[10] p-3 bg-card-muted" key={item.id}>
            <View className=" flex flex-row gap-2">
              <View className=" w-10 h-10 flex items-center justify-center rounded-full bg-card">
                <MaterialIcons name={item.type as any} size={16} color="gray" />
              </View>
              <View className=" w-full  flex flex-row justify-between items-center">
                <View>
                  <Text className=" text-sm font-semibold text-text-primary ">
                    {item.title}
                  </Text>
                  <Text className=" text-[11px] text-text-secondary ">
                    {item.timeAgo}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default AnnounceMent;

export const fakeAnnouncements = [
  {
    id: "1",
    title: "Company Holiday - Jan 26",
    date: "2026-01-26",
    createdAt: "2026-02-15T09:00:00Z",
    timeAgo: "2 days ago",
    type: "holiday-village",
  },
  {
    id: "2",
    title: "New Policy Update Available",
    createdAt: "2026-02-10T08:30:00Z",
    timeAgo: "1 week ago",
    type: "policy",
  },
  {
    id: "3",
    title: "Team Building Event - Feb 10",
    date: "2026-02-10",
    createdAt: "2026-02-03T10:00:00Z",
    timeAgo: "2 weeks ago",
    type: "event",
  },
];
