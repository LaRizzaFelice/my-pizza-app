import { ActivityIndicator, useWindowDimensions } from "react-native";
import { StyleSheet, View, Image } from "react-native";
import tw from "twrnc";
import ItalianFlagBanner from "../components/ItalianFlagBanner";
import {ComposeNative} from "../components/ComposeNative";

import { Footer } from "../components/Footer";
import { ORDERCONFIRM } from "../navigation_constants";
import { ScreenButton } from "../components/ScreenButton";

export function NativeScreen() {
  return (
    <View style={styles.container}>
      <ItalianFlagBanner />
      <ComposeNative/>
      <ScreenButton navLink={ORDERCONFIRM} />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: tw`h-full bg-green-200`,
  image: tw`mx-auto my-2`,
  center: tw`items-center`,
});
