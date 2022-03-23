import { TextStyle, ViewStyle } from "react-native";
import { color } from "./color";
import { spacing } from "./spacing";


export const Box: ViewStyle = {
  flex: 1,
}

export const Padding: ViewStyle = {
  padding: spacing[4],
}

export const H1: TextStyle = {
  fontSize: 18,
  textTransform: 'uppercase',
  color: color.lightGrey,
}