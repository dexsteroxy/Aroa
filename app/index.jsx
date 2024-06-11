import { Redirect, router } from "expo-router";
import Logo from "../assets/images/logo.png";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import cards from "../assets/images/cards.png";
import path from "../assets/images/path.png";
import CustomButton from '../components/CustomButton'
import { StatusBar } from "expo-status-bar";

export default function Index() {
  return (
    <SafeAreaView className=" bg-primary h-full">
      <ScrollView>
        <View className=" w-full justify-center items-center min-h-[88vh] px-4">
          <Image
            source={Logo}
            className=" w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={cards}
            className=" max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />

          <View className=" relative mt-5">
            <Text className=" text-3xl text-white font-bold text-center">
              Discover Endless Possibilities with{" "}
              <Text className=" text-secondary-200">Aora</Text>
            </Text>

            <Image
              source={path}
              className=" w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>
          <Text className=" text-sm font-pregular text-gray-100 mt-7 text-center">Where creativity meets innovation: embartk on a journey of
            limitless exploration with Aora
          </Text>
          <CustomButton
          title="Continue with Email"
          handlePress={() => router.push('./Sign-in')}
          containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
