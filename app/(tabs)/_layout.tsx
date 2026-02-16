import CustomHeader from "@/components/custome-header";
import { useTheme } from "@/components/ui/theme/theme-provider";
import { Ionicons } from "@expo/vector-icons"; // Icon များအတွက်
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import Attandance from "./(attandance)";
import Home from "./(home)";
import Leave from "./(leave)";
import PaySlip from "./(payslip)";
import Profile from "./(profile)";

const Tab = createBottomTabNavigator();

export default function Layout() {
  const { theme } = useTheme();

  return (
    <SafeAreaView className=" bg-card flex-1">
      <Tab.Navigator
        screenOptions={({ route }) => ({
          // Custom Header ကို ဒီမှာ ထည့်ထားမယ် (အရင်ပြောခဲ့သလို)
          header: () => <CustomHeader />,

          // Tab Bar ရဲ့ ပုံစံကို ဒီမှာ ပြင်မယ်
          tabBarStyle: {
            height: 70,
            paddingBottom: 10,
            paddingTop: 10,
            backgroundColor: theme == "light" ? "#ffffff" : "28 41 61",
            borderTopWidth: 0,
          },
          tabBarActiveTintColor:
            theme == "light" ? "rgb(37 99 235)" : "rgb(59 130 246)", // အပြာရောင် (Active ဖြစ်ချိန်)
          tabBarInactiveTintColor:
            theme == "light" ? "#94a3b8" : "rgb(163 163 163)", // မီးခိုးရောင် (Inactive)
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "500",
          },

          // Icon များကို dynamic ပြောင်းလဲခြင်း
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Attendance") {
              iconName = focused ? "time" : "time-outline";
            } else if (route.name === "Leave") {
              iconName = focused ? "calendar" : "calendar-outline";
            } else if (route.name === "Payslip") {
              iconName = focused ? "document-text" : "document-text-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
            }
            return <Ionicons name={iconName as any} size={21} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Attendance" component={Attandance} />
        <Tab.Screen name="Leave" component={Leave} />
        <Tab.Screen name="Payslip" component={PaySlip} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
