import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#434343', 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    container2: {
        backgroundColor: 'white', 
        borderRadius: 10, 
        width: 300, 
        height: 200, 
        padding: 20
    },
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        borderColor: 'rgba(0, 0, 121, 0.89)',
    },
    botton: {
        padding: 15,
        paddingHorizontal: 25,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: '#87cefa',
        marginTop: '10%',
    },
    textRequired: {
        paddingLeft: 15,
        color: 'red'
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});

export default styles