import React from 'react'
import {Text, View, Image} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import styles from './style';

interface EnviromentButtonProps extends RectButtonProps {
    title: string;
    active?: boolean
}

export default function EnviromentButton({title, active = false, ...rest}: EnviromentButtonProps){
    return (
            <RectButton style={[styles.container, active && styles.containerActive]} {...rest}>
                <Text style={[styles.text, active && styles.textActive]}>{title}</Text>
            </RectButton>
    )
}