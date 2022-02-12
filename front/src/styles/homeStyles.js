import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    input: {
        height: 50,
        width: '75%',
        margin: 0,
        padding: 10,
        borderColor: 'rgba(0, 0, 121, 0.89)',
        textAlign: 'center',
        fontSize: 20,
        color: 'rgba(0, 0, 121, 0.89)',
    },
    container: {
        marginHorizontal: 16,
        /* padding: 10, */
        height: '100%',
    },
    container1: {
        /* flex: 1, */
        padding: 0,
      },
    bottonAndText: {
        padding: 5,
    },
    botton: {
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: '#87cefa',
        marginBottom: 5,
    },
    bottonSearch: {
        height: 50,
        width: 40,
        borderRadius: 50,
        right: '0%',
        justifyContent: 'center',
        
    },
    logo: {
        flex: 3,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
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
    image: {
        height: 425,
        justifyContent: "center",
        color: 'red'
    },
});

export default styles