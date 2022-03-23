import * as React from 'react';
import { KeyboardAvoidingView, ScrollView, StatusBar, View } from 'react-native';
import { Box } from '../../theme';
import { ScreenProps } from './props';

function ScreenWithoutScrolling(props: ScreenProps) {
  const style = props.style || {};
  const backgroundStyle = props.backgroundColor ? { backgroundColor: props.backgroundColor } : {};

  return (
    <KeyboardAvoidingView
      style={[Box, backgroundStyle]}
    >
      <StatusBar barStyle={props.statusBar || 'dark-content'} />
      <View style={[style]}>{props.children}</View>
    </KeyboardAvoidingView >
  );
}

function ScreenWithScrolling(props: ScreenProps) {
  const backgroundStyle = props.backgroundColor ? { backgroundColor: props.backgroundColor } : {};
  return (
    <KeyboardAvoidingView
      style={[Box, backgroundStyle]}
    >
      <StatusBar barStyle={props.statusBar || 'dark-content'} />
      <View style={[backgroundStyle]}>
        <ScrollView style={[backgroundStyle]} >
          {props.children}
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}


export function Screen(props: ScreenProps) {
  if (!props.isScroll) {
    return <ScreenWithoutScrolling {...props} />;
  } else {
    return <ScreenWithScrolling {...props} />;
  }
}