import React, {useEffect, useState} from 'react'
import {Text, View, Image} from 'react-native';

import styles from './style';
import userImg from '../../assets/willian.jpg';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Header(){
    const [userName, setUserName] = useState<string>();
    const loadStorageUserName = async()=>{
        const user = await AsyncStorage.getItem("@plantmanager:user");
        setUserName(user || '')

    }
    useEffect(()=>{
        loadStorageUserName()
    }, [userName])
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá,</Text>
                <Text style={styles.userName}>{userName}</Text>
            </View>
            <Image style={styles.image} source={userImg}/>
        </View>
    )
}