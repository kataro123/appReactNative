import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Pressable, Alert, Image } from 'react-native'
import styles from './styles'

import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'
import LogoGoogle from '../../../assets/logo_google.png'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

// Componentes criados
import { HeaderLogo } from '../../../components/HeaderLogo'


export const Login = () => {

    const navigation = useNavigation();

    const [show, setShow] = useState(false);
    // const [showPassword, setShowPassword] = useState(false)

    const handleVisible = () => {
        setShow(!show);
    }

    const handleGoToLogin = () => {
        Alert.alert('Login com email e senha');
    }

    const handleGoToLoginGoogle = () => {
        Alert.alert('Login google realizado com sucesso!');
    }

    const handleGoToForgotPassowrd = () => {
        navigation.navigate('ForgotPassword');
    }

    const handleGoToRegister = () => {
        navigation.navigate('Cadastro');
    }

    return (
        <SafeAreaView style={styles.container}>

            <HeaderLogo />

            <Text style={styles.subtitle}>Logue para continuar</Text>

            <View style={styles.content}>
                <MaterialCommunityIcons name='email-outline' size={24} color="lightgray" />
                <TextInput style={styles.textInput} placeholder='Endereço de Email' />
            </View>

            <View style={styles.contentPassword}>
                <SimpleLineIcons name='lock' size={24} color="lightgray" />
                <TextInput style={styles.textInput} placeholder='Sua Senha' secureTextEntry={show} />
                <TouchableOpacity onPress={handleVisible}>
                    <MaterialCommunityIcons name={show ? 'eye-off' : 'eye'} size={24} color={show ? 'lightgray' : 'black'} />
                </TouchableOpacity>
            </View>

            <Pressable style={styles.forgotPassword} onPress={handleGoToForgotPassowrd}>
                <Text style={styles.forgotPasswordText}>Esqueceu sua senha?
                    <Text style={styles.forgotPasswordTextLink}> Clique aqui</Text>
                </Text>
            </Pressable>

            <Pressable style={styles.button} onPress={handleGoToLogin}>
                <Text style={styles.buttonText}>Entrar</Text>
            </Pressable>

            <Pressable style={styles.buttonSocial} onPress={handleGoToLoginGoogle}>
                <Image source={LogoGoogle} style={styles.imageGoogle} />
                <Text style={styles.textGoogle}>Entrar com o Google</Text>
            </Pressable>

            <Pressable style={styles.register} onPress={handleGoToRegister}>
                <Text style={styles.registerText}>Não tem uma conta?
                    <Text style={styles.registerTextLink}> Clique aqui</Text>
                </Text>
            </Pressable>

        </SafeAreaView>
    )
}
