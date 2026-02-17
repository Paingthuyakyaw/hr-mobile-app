import { Grid, GridItem } from "@/components/ui/grid";
import React from "react";
import { Text, View } from "react-native";

const LeaveCard = () => {
  return (
    <View className=" bg-card p-5 rounded-[20]">
      <Text className=" text-text-primary pb-4 font-[600]">Leave Balance</Text>
      <Grid className=" gap-5" _extra={{ className: "grid-cols-12" }}>
        <GridItem _extra={{ className: "col-span-4" }}>
          <View className=" items-center gap-1 rounded-[20] p-5 bg-card-muted ">
            <Text className=" text-2xl font-bold text-text-primary ">12</Text>
            <Text className=" text-text-secondary text-[11px] font-[500]">
              Total
            </Text>
          </View>
        </GridItem>
        <GridItem _extra={{ className: "col-span-4" }}>
          <View className=" items-center gap-1 rounded-[20] p-5 bg-success/20 ">
            <Text className=" text-2xl font-bold text-success ">8</Text>
            <Text className=" text-text-secondary text-[11px] font-[500]">
              Available
            </Text>
          </View>
        </GridItem>
        <GridItem _extra={{ className: "col-span-4" }}>
          <View className=" items-center gap-1 rounded-[20] p-5 bg-info/20 ">
            <Text className=" text-2xl font-bold text-info ">4</Text>
            <Text className=" text-text-secondary text-[11px] font-[500]">
              Used
            </Text>
          </View>
        </GridItem>
      </Grid>
    </View>
  );
};

export default LeaveCard;
