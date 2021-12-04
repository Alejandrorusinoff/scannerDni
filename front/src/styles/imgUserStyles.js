import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    input: {
        height: 50,
        width: '80%',
        margin: 0,
        padding: 10,
        borderColor: 'rgba(0, 0, 121, 0.89)',
    },
    container: {
        marginHorizontal: 16,
        padding: 10,
        height: '100%',
    },
    bottonAndText: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 20,
    },
    botton: {
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: '#87cefa',
        marginBottom: 5,
    },
    logo: {
        flex: 3,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 300,
        borderRadius: 150,
    },
    textRequired: {
        paddingLeft: 15,
        color: 'red',
    },
    title1: {
        color: 'rgba(0, 0, 121, 0.89)',
        fontSize: 30,
        textAlign: 'center',
    },
    search: {
        borderWidth: 1,
        flexDirection: 'row',
        borderColor: 'rgba(0, 0, 121, 0.89)',
        borderRadius: 50,
        marginTop: '3%',
    },
    img: {
        flex: 3,
        marginTop: '18%',
        marginBottom: '18%',
    },
});

export default styles