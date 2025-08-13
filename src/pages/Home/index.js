import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    SafeAreaView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

export default function Home() {
    const handlePress = (action) => {
        console.log(`Pressed: ${action}`);
        // Aqui você pode adicionar a navegação ou ações específicas
    };

    const menuItems = [
        {
            id: 1,
            title: 'Resultado de Jogos',
            icon: 'trophy-outline',
            color: '#4CAF50',
            action: 'results'
        },
        {
            id: 2,
            title: 'Transmissão',
            icon: 'tv-outline',
            color: '#F44336',
            action: 'broadcast'
        },
        {
            id: 3,
            title: 'Fotos',
            icon: 'camera-outline',
            color: '#FF9800',
            action: 'photos'
        },
        {
            id: 4,
            title: 'Chamada para Jogos',
            icon: 'game-controller-outline',
            color: '#9C27B0',
            action: 'gameCall'
        },
        {
            id: 5,
            title: 'Configuração',
            icon: 'settings-outline',
            color: '#607D8B',
            action: 'settings'
        }
    ];

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Menu Principal</Text>
                <Text style={styles.headerSubtitle}>Escolha uma opção</Text>
            </View>

            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.menuGrid}>
                    {menuItems.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            style={[styles.menuItem, { borderLeftColor: item.color }]}
                            onPress={() => handlePress(item.action)}
                            activeOpacity={0.7}
                        >
                            <View style={styles.menuItemContent}>
                                <View style={[styles.iconContainer, { backgroundColor: item.color + '20' }]}>
                                    <Ionicons
                                        name={item.icon}
                                        size={32}
                                        color={item.color}
                                    />
                                </View>
                                <View style={styles.textContainer}>
                                    <Text style={styles.menuItemTitle}>{item.title}</Text>
                                    <Ionicons
                                        name="chevron-forward"
                                        size={20}
                                        color="#666"
                                        style={styles.chevron}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Seção adicional */}
                <View style={styles.bottomSection}>
                    <Text style={styles.bottomText}>
                        Acesse rapidamente as funcionalidades principais do app
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
