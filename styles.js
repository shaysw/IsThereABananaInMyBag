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
        backgroundColor: '#00000000',
        textAlignVertical: 'top'
    },
    bottomContainer: {
        backgroundColor: '#00000000',
        textAlignVertical: 'bottom',
    },
    text: {
        color: '#000000',
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 42,
        textAlign: 'center',
        marginLeft: 12,
        marginRight: 12
    },
    image: {
        justifyContent: 'center'
    },
    banana: {
        position: "absolute",
    },
    time: {
        fontSize: 30,
        color: "#fff",
        marginBottom: 30,
        textAlign: "center",
    }
});