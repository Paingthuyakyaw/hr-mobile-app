import HomeComponent from "@/features/home";
import React from "react";
import { ScrollView } from "react-native";

const Home = () => {
  return (
    <ScrollView className=" p-5 bg-background flex-1">
      <HomeComponent />
    </ScrollView>
  );
};

export default Home;
