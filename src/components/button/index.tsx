import { Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import {ButtonStyle} from './styles'
import React from 'react'
import { color, H1 } from '../../theme'
import { ButtonProps } from './props'

export const Button:React.FC<ButtonProps> = ({TextButton, BgColor, onPress, loading}) => {
  
  const backgroundStyle: object = BgColor ? { backgroundColor: BgColor } : {};
  return (
    <TouchableOpacity style={[ButtonStyle, backgroundStyle]} onPress={onPress}>
      {
        loading ? (
          <ActivityIndicator size='small' color={color.white}/>
        ) : (
          <Text style={H1}>{TextButton}</Text>
        )
      }
    </TouchableOpacity>
  )
}