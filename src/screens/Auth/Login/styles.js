import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 25
    },
    // title: {
    //     fontSize: 16,
    //     fontWeight: '700',
    //     marginTop: 16
    // },
    // logo: {
    //     width: 66,
    //     height: 72,
    //     backgroundColor: '#25ce09',
    //     borderRadius: 18,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     marginTop: -100
    // },
    // titleLogo: {
    //     fontSize: 42,
    //     fontWeight: 'bold',
    //     color: '#fff',
    // },
    subtitle: {
        fontSize: 12,
        fontWeight: '700',
        color: '#828282',
        marginTop: 16
    },
    textInput: {
        flex: 1,
        height: 48,
        marginLeft: 5,
        color: '#828282',
        fontSize: 14,

    },
    content: {
        width: '100%',
        paddingHorizontal: 10,
        borderWidth: 2,
        borderColor: '#7cb1ff',
        marginTop: 30,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
        // marginLeft: 5,
    },
    contentPassword: {
        paddingHorizontal: 10,
        borderWidth: 2,
        borderColor: '#7cb1ff',
        marginTop: 30,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    button: {
        // flex: 1,
        width: '100%',
        height: 57,
        borderRadius: 10,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1FA309'
    },
    buttonText: {
        color: '#fff',
        fontSize: 16
    },
    buttonSocial: {
        flexDirection: 'row',
        width: '100%',
        height: 57,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 70,
        marginTop: 20,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1
    },
    imageGoogle: {
        marginLeft: -70
    },
    textGoogle: {
        color: '#000',
        fontSize: 16
    },
    forgotPassword: {
        width: '100%',
        alignItems: 'flex-end',
        marginRight: 10,
        justifyContent: 'center',
        marginTop: 10
    },
    forgotPasswordTextLink: {
        color: '#1fa309',
        fontWeight: 'bold',
        marginLeft: 10
    },
    register: {
        width: '100%',
        alignItems: 'center',
        marginRight: 10,
        justifyContent: 'center',
        marginTop: 60
    },
    registerTextLink: {
        color: '#1fa309',
        fontWeight: 'bold',
        marginLeft: 10
    }
});
