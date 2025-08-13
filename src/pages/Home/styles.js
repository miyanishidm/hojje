import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191919'
    },

    header: {
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 30,
        backgroundColor: '#191919'
    },

    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 5
    },

    headerSubtitle: {
        fontSize: 16,
        color: '#AAA',
        opacity: 0.8
    },

    scrollView: {
        flex: 1
    },

    scrollContent: {
        paddingBottom: 30
    },

    menuGrid: {
        paddingHorizontal: 20
    },

    menuItem: {
        backgroundColor: '#2A2A2A',
        borderRadius: 12,
        marginBottom: 15,
        borderLeftWidth: 4,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },

    menuItemContent: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20
    },

    iconContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15
    },

    textContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    menuItemTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#FFF',
        flex: 1
    },

    chevron: {
        opacity: 0.6
    },

    bottomSection: {
        paddingHorizontal: 20,
        paddingTop: 30,
        alignItems: 'center'
    },

    bottomText: {
        fontSize: 14,
        color: '#888',
        textAlign: 'center',
        lineHeight: 20,
        opacity: 0.8
    }
});
