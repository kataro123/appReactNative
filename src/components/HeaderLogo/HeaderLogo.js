import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export const HeaderLogo = () => {
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Text style={styles.titleLogo}>F</Text>
            </View>

            <Text style={styles.title}>Bem-vindo ao Faga Studios!</Text>
        </View>
    )
}
