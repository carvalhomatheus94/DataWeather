import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Wrapper, TitleStyle, DescriptionStyle } from './styles';
import {ListProps} from './props'
import { color } from '../../theme';

export const List: React.FC<ListProps> = ({
  Title,
  Description,
  testID,
  iconName,
}) => {
  return (
    <View style={Wrapper} testID={testID}>
      <Text style={TitleStyle}>{Title}: </Text>
      <Text style={DescriptionStyle}>{Description} </Text>
      {
        iconName && (
          <Icon size={16} name={iconName} color={color.white}/>
        )
      }
    </View>
  );
}