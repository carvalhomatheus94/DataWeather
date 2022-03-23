import { TextStyle, ViewStyle } from "react-native";
import { color, spacing } from "../../theme";

export const Wrapper: ViewStyle = {
  paddingVertical: spacing[1],
  marginBottom: spacing[2],
  flexDirection: 'row',
  alignItems: 'center'
}

export const TitleStyle: TextStyle = {
  fontSize: 18,
  color: color.white,
  fontWeight: 'bold'
}
export const DescriptionStyle: TextStyle = {
  fontSize: 16,
  color: color.white,
  marginRight: spacing[2]
}