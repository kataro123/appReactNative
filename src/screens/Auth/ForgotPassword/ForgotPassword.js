import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { useNavigation } from '@react-navigation/native'

export const ForgotPassword = () => {

    const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1, justifyContent: "center", alignItems: 'center'}}>
      <Text style={{ fontSize: 30, fontWeight: 'bold' }}>ForgotPassword</Text>
      <Pressable onPress={ navigation.goBack }>
        <Text>Voltar</Text>
      </Pressable>
    </SafeAreaView>
  )
}
