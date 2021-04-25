import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';


import styles from './style'

interface ButtonProps extends TouchableOpacityProps{
    title: string
}

export default function Button({title, ...rest}: ButtonProps ){
    return (
        <SafeAreaView >
            <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
                <Text style={styles.text}>
                  {title}
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}