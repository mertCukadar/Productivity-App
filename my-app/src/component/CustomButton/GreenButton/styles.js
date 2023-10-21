import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    universalContainer: {
        flexDirection: 'row',
        marginTop: 20,
        width: 300,
        justifyContent: "center",
       
    },
    container: {
        flexDirection: 'column',
        alignItems: 'center',
    },

    createAccount: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#118974',
        width: 250,
        height: 40,
        borderRadius: 40,
        justifyContent: "center",
        marginTop: 20,
    },
    createAccountText: {
        color: '#F6F1F1',
        fontSize: 16,
        marginRight: 5,
    }
});

export { styles };