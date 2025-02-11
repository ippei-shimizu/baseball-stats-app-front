import { useEffect } from "react";
import { Alert, Button, Platform, View } from "react-native";
import { GoogleSignin } from "react-native-google-signin";

export default function GoogleSignInButton() {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        Platform.OS === "ios"
          ? process.env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID
          : process.env.EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID,
    });
  }, []);

  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const { idToken, user } = await GoogleSignin.signIn();

      if (!idToken) {
        throw new Error("GoogleのIDトークンが取得できませんでした。");
      }

      const res = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/auth/google`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idToken }),
      });

      const data = await res.json();
      Alert.alert("ログイン成功", `ようこそ、${data.user.name}さん！`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Button title="Googleログイン" onPress={signInWithGoogle}></Button>
    </View>
  );
}
