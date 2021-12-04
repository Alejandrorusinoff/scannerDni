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
      justifyContent: 'space-around',
      marginHorizontal: 16,
      padding: 10,
      flexDirection: 'row',
    },
    bottonAndText: {
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 20,
    },
    bottonRadio: {
      padding: 0,
      borderRadius: 80,
      alignItems: 'center',
      backgroundColor: '#87cefa',
      width: 55,
      height: 55,
      borderWidth: 1,
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
    title1: {
      color: 'rgba(0, 0, 121, 0.89)', 
      fontSize: 30, 
      textAlign: 'center'
    },
    title2: {
      color: 'rgba(0, 0, 121, 0.89)', 
      fontSize: 20, 
    },
    title3: {
      color: 'rgba(0, 0, 121, 0.89)', 
      fontSize: 20, 
      padding: 5,
    },
    text: {
      justifyContent: 'center',
      fontSize: 18,
      textAlign: 'center',
      marginTop: '3%',
      marginBottom: '3%',
    },
    temp1: {
      fontSize: 40,
    },
    temp2: {
      fontSize: 40,
    },
    botton: {
      padding: 10,
      borderRadius: 10,
      alignItems: 'center',
      backgroundColor: '#87cefa'
    },
});

export default styles