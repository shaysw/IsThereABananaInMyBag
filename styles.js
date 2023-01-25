import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    baseContainer: {
        flex: 1,
        backgroundColor: '#0099cc',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center'
    },
    topContainer: {
        backgroundColor: '#0099cc',
        textAlignVertical: 'top'
    },
    bottomContainer: {
        backgroundColor: '#0099cc',
        textAlignVertical: 'bottom',
    },
    text: {
        color: '#33b5e5',
        fontFamily: 'Roboto:wght@500',
        fontSize: 48,
        textAlign: 'center',
        marginLeft: 12,
        marginRight: 12
    },
    image: {
        justifyContent: 'center'
    },
    banana: {
        position: "absolute",
    }
});