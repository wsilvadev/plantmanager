import React, { useState } from 'react';
import {SafeAreaView, View,Text, TextInput, KeyboardAvoidingView, Platform} from 'react-native';

import styles from'./style'
import Button from '../../components/Button'
import colors from '../../styles/colors';

export default function UserIdentification (){
    const [isFocused, setIsFocused] = useState(false)
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>()
    const handleInputBlur =()=> {
        setIsFocused(false);
        setIsFilled(!!name)
    }
    const handleInputFocus = ()=> {
        setIsFocused(true)
    }
    const handleInputChange = (value: string) => {
        setIsFilled(!!value)
        setName(value)
    }
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView style={styles.container} behavior ={Platform.OS === 'ios' ? 'padding': 'height'}>
            <View style={styles.content}>
                <View style={styles.form}>
                    <View style={styles.header}>
                    <Text style={styles.emoji}>{!isFocused ? '😏': '😎'}</Text>
                    <Text style={styles.title}>Como podemos {"\n"} chamar você?</Text>
                    </View>
                    <TextInput placeholder="Digite um nome" style={[styles.input, (isFilled || isFocused)  &&{borderColor: colors.green}]} onBlur={handleInputBlur} onFocus={handleInputFocus} onChangeText={handleInputChange}/>
                    <View style={styles.footer}>
                    <Button title='Confirmar'/>
                    </View>
                </View>
            </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}