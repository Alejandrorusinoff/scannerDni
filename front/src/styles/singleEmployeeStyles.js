import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        borderColor: 'rgba(0, 0, 121, 0.89)',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
        padding: 10,
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
        marginTop: '4%'
    },
    logo: {
        flex: 3, 
        borderWidth: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 150,
    },
    textRequired: {
        paddingLeft: 15,
        color: 'red'
    },
    title: {
        color: 'rgba(0, 0, 121, 0.89)', 
        fontSize: 20, textAlign: 'center'
    },
    title1: {
        color: 'rgba(0, 0, 121, 0.89)', 
        fontSize: 30, 
        textAlign: 'center',
        marginBottom: '5%',
    },
    title3: {
        color: 'rgba(0, 0, 121, 0.89)', 
        fontSize: 20, 
        padding: 5,
    },
    img: {
        flex: 3, 
        marginTop: '18%', 
        marginBottom: '18%'
    },
    img1: {
        color: '#6495ed', 
        textAlign: 'center'
    },
    container1: { 
        flex: 1, 
        padding: 16, 
        paddingTop: 16, 
        backgroundColor: '#fff' 
    },
    head: { 
        height: 60, 
        backgroundColor: '#f1f8ff',
        width: 2120,
    },
    btn: { 
        width: 58, 
        height: 18, 
        marginLeft: 15, 
        backgroundColor: '#c8e1ff', 
        borderRadius: 2 
    },
    btnText: { 
        textAlign: 'center' 
    }
});

export default styles