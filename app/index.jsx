import React, { useState } from "react";
import {
  ScrollView,
  Image,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <TextInput
            value={username}
            onChangeText={setUsername}
            placeholder="Username"
            className="w-full p-3 mt-4 border border-gray-300 rounded-md shadow-md"
            style={{ backgroundColor: "#F9FAFB" }}
          />

          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry
            className="w-full p-3 mt-4 border border-gray-300 rounded-md shadow-md"
            style={{ backgroundColor: "#F9FAFB" }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
