import React, { useState, useEffect } from 'react';
import {
    KeyboardAvoidingView,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Animated,
    Keyboard,
    Platform
} from 'react-native';

import styles from './styles';

export default function Login() {
    const [offset] = useState(new Animated.ValueXY({ x: 0, y: 80 }));
    const [opacity] = useState(new Animated.Value(0));
    const [logo] = useState(new Animated.ValueXY({ x: 170, y: 195 }));

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            keyboardDidShow
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            keyboardDidHide
        );

        // Initial animations
        Animated.parallel([
            Animated.spring(offset.y, {
                toValue: 0,
                speed: 4,
                bounciness: 20,
                useNativeDriver: true
            }),
            Animated.timing(opacity, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true
            })
        ]).start();

        // Cleanup function
        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    function keyboardDidShow() {
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 95,
                duration: 100,
                useNativeDriver: false // width/height can't use native driver
            }),
            Animated.timing(logo.y, {
                toValue: 105,
                duration: 100,
                useNativeDriver: false
            })
        ]).start();
    }

    function keyboardDidHide() {
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 170,
                duration: 100,
                useNativeDriver: false
            }),
            Animated.timing(logo.y, {
                toValue: 195,
                duration: 100,
                useNativeDriver: false
            })
        ]).start();
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <View style={styles.containerLogo}>
                <Animated.Image
                    style={{
                        width: logo.x,
                        height: logo.y
                    }}
                    source={require('../../assets/logo.png')}
                />
            </View>

            <Animated.View style={[
                styles.form,
                {
                    opacity: opacity,
                    transform: [
                        {
                            translateY: offset.y
                        }
                    ]
                }
            ]}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    autoCapitalize="none"
                    autoCompleteType="email"
                    autoCorrect={false}
                    onChangeText={() => {}}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    textContentType="password"
                    autoCapitalize="none"
                    autoCompleteType="password"
                    autoCorrect={false}
                    secureTextEntry={true}
                    onChangeText={() => {}}
                />

                <TouchableOpacity style={styles.buttonSubmit}>
                    <Text style={styles.submitText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister}>
                    <Text style={styles.registerText}>Criar conta gratuita</Text>
                </TouchableOpacity>
            </Animated.View>
        </KeyboardAvoidingView>
    );
}
