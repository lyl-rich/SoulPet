
import { View, Text } from "react-native";

export default function Stat({ value, label }) {
  return (
    <View>
      <Text>{value}</Text>
      <Text>{label}</Text>
    </View>
  );
}
