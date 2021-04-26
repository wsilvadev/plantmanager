import React from 'react'
import {Text, View, Image} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import {SvgFromUri} from 'react-native-svg'


import styles from './style';

interface PlantProps extends RectButtonProps {
 data: {
     name: string;
     photo: string;
 }
}

export default function PlantCardPrimary({data, ...rest}: PlantProps){
    return (
            <RectButton style={styles.container} {...rest}>
                <SvgFromUri uri={data.photo} height={70} width={70}/>
                <Text style={styles.text}>{data.name}</Text>
            </RectButton>
    )
}