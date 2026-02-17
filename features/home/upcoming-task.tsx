import { Entypo, Ionicons, Octicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

const UpcomingTask = () => {
  return (
    <View className=" rounded-[20] bg-card p-5 ">
      <View className=" flex-row  pb-4 flex items-center justify-between">
        <Text className=" flex flex-row items-center text-text-primary font-[600]">
          <Octicons name="zap" size={16} color="rgb(37 99 235)" /> Upcoming
          Tasks
        </Text>
        <Text className=" text-primary-700 text-[11px] ">
          View all <Ionicons name="arrow-forward" />
        </Text>
      </View>
      <View className="  gap-2">
        {fakeTasks.splice(0, 3).map((item) => (
          <View className="rounded-[10] p-3 bg-card-muted" key={item.id}>
            <View className=" w-full flex flex-row">
              <Entypo
                name="dot-single"
                size={24}
                color={item.priority == "High" ? "red" : "orange"}
              />
              <View className=" w-full pr-6 flex flex-row justify-between items-center">
                <View>
                  <Text className=" text-sm font-semibold text-text-primary ">
                    {item.title}
                  </Text>
                  <Text className=" text-[11px] text-text-secondary ">
                    Due : {item.dueDate}
                  </Text>
                </View>
                <View className=" bg-orange-50 px-2 py-1 rounded-full">
                  <Text className=" text-[9px] font-medium text-orange-500 ">
                    {item.priority}
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

export default UpcomingTask;

export const fakeTasks = [
  {
    id: "1",
    title: "Submit Q1 Marketing Report",
    description: "Prepare and submit quarterly marketing performance report",
    dueDate: "2026-02-15",
    assignee: "Sarah Manager",
    priority: "HIGH",
    category: "Reports",
    status: "Pending",
  },
  {
    id: "2",
    title: "Team Meeting - Budget Review",
    description: "Attend team meeting to discuss Q2 budget allocation",
    dueDate: "2026-02-16",
    assignee: "John Director",
    priority: "MEDIUM",
    category: "Meetings",
    status: "Pending",
  },
  {
    id: "3",
    title: "Client Presentation Prep",
    description: "Prepare presentation slides for upcoming client meeting",
    dueDate: "2026-02-18",
    assignee: "Sarah Manager",
    priority: "HIGH",
    category: "Presentations",
    status: "In Progress",
  },
  {
    id: "4",
    title: "Update Marketing Strategy",
    description: "Review and update marketing strategy for Q2",
    dueDate: "2026-02-20",
    assignee: "Marketing Team",
    priority: "MEDIUM",
    category: "Strategy",
    status: "In Progress",
  },
  {
    id: "5",
    title: "Social Media Content Calendar",
    description: "Create content calendar for March 2026",
    dueDate: "2026-02-22",
    assignee: "Sarah Manager",
    priority: "LOW",
    category: "Content",
    status: "In Progress",
  },
];
