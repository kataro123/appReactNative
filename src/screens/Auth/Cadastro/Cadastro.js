import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { useNavigation } from '@react-navigation/native'

import { styles } from './styles'
import { HeaderLogo } from '../../../components/HeaderLogo'

export const Cadastro = () => {

    const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>

      <HeaderLogo />

      <Text style={styles.subtitle}>Registre-se para continuar</Text>

      <Pressable onPress={ navigation.goBack }>
        <Text>Voltar</Text>
      </Pressable>
    </SafeAreaView>
  )
}
