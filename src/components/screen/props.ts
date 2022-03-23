

import { ViewStyle } from 'react-native'
export interface ScreenProps {
  isScroll?: boolean
  isBackground?: boolean
  children?: React.ReactNode
  isHeader?: boolean
  style?: ViewStyle
  backgroundColor?: string
  justifyContent?: string
  justifyStyle?: string
  statusBar?: "light-content" | "dark-content"
}