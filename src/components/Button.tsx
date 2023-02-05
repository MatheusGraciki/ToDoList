import React from 'react';
import {Button as NativeButton, IButtonProps, Text} from 'native-base';
import { StyleSheet, StyleProp, ViewStyle, GestureResponderEvent } from 'react-native';




type Props = IButtonProps & {
        onPress:  ((event: GestureResponderEvent) => void) | undefined
        selected?:boolean
        buttonText?:string;
        backgroundColor?:string;
        onPressBgColorValue?: string;
        style?: StyleProp<ViewStyle>;






}

export function Button  ({ onPress, selected, buttonText , onPressBgColorValue, style , ...rest}: Props){
    return (
        <NativeButton
            style={[ style,
                selected ? {backgroundColor:onPressBgColorValue} : {borderColor:onPressBgColorValue, backgroundColor:'#fff', borderWidth:1}
            ]}
            onPress={onPress}
        >
            <Text style={[
                styles.buttonText,selected ? styles.selectedButtonText : styles.defaultButtonText
            ]}>
                {buttonText}
            </Text>
        </NativeButton>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 100,
        height: 40,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'

    },
    defaultButton: {
        backgroundColor: '#fff'

    },
    buttonText: {
        fontSize: 16
    },
    selectedButtonText: {
        color: '#fff'
    },
    defaultButtonText: {
        color: '#000',
    }
});



